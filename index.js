import express from 'express'
import connectionDB from  './config/db.js'
import authRoutes from './route/auth.routes.js'
import fileRoutes from './route/file.routes.js'
import mailRoutes from './route/mail.routes.js'


const app=express()

const PORT  = 5000
app.use(express.json())

app.use('/api/auth',authRoutes)
app.use('/api/files',fileRoutes)
app.use('/api/mails',mailRoutes)


connectionDB()

app.get('/',(req,res)=>{
    res.send("coldmailer api is running");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
})