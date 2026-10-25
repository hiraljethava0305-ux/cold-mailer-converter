import jwt from "jsonwebtoken"
import User from "../model/auth.model.js"

export const authMiddleware=async(req,res,next)=>{
    try{
   const authorization = req.headers.authorization
   if (!authorization?.startsWith("Bearer ")) {
      return res.status(401).json({
        msg:"token is required"
      })
   }

   const token = authorization.split(" ")[1]
   const decoded = jwt.verify(token, process.env.JWT_SECRET)
   const user = await User.findById(decoded.userId)

   if(!user){
      return res.status(401).json({
        msg:"user not found"
      })
   }

   req.user=user
   next()


    }catch(err){
      const status = err.name === "JsonWebTokenError" || err.name === "TokenExpiredError" ? 401 : 500
      console.log("auth middleware error:",err)

      return res.status(status).json({
        msg: status === 401 ? "invalid or expired token" : "internal server error"
      })
    }
}