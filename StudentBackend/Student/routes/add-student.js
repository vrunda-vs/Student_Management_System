const express=require('express');
const router=express.Router();
var StudentManagement=require('../controller/add-student')


//signin route
router.post('/Registartion',(req,res)=>{
  return StudentManagement.Registartion(req,res);
})

router.get('/getstudent',(req,res)=>{
  return StudentManagement.GetStudentData(req,res);
})
module.exports=router;