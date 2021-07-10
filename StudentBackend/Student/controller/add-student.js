const client=require("../../Connection/connection");

exports.Registartion=function(req,res){
    (async()=>{
        const getstudentdata=req.body;
        console.log(req)
        const adduser=await client.query('insert into student(fname,mname,lname,gender,mobile_no,email,dob,address) values($1,$2,$3,$4,$5,$6,$7,$8)',[getstudentdata.fname,getstudentdata.mname,getstudentdata.lname,getstudentdata.gender,getstudentdata.mobile_no,getstudentdata.email,getstudentdata.dob,getstudentdata.address],(error)=>{
            if(error)
            {
                res.status(401).json(error);
            }
            res.status(200).json({
                status:"Success",
                msg:"Student added Succesfully"
            })
        })
    })();
}

exports.GetStudentData=function(req,res){
    (async()=>{
        const getstudent=await client.query('select * from student',(error,responce)=>{
            if(error)
            {
                res.status(401).json(error);
            }
            res.status(200).json({
                data:responce.rows
            })
        })
    })();
}