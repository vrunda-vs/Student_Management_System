import React,{useEffect,useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function TypographyPage() {
  const classes = useStyles();
  const [student,setstudent]=useState([]);
  const [studentdata,setstudentdata]=useState([student]);

  const [id,setid]=useState([]);


  useEffect(() => {
    var myHeaders = new Headers();
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    // myHeaders.append("Access-Control-Allow-Headers", "application/json");
    // myHeaders.append("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
    // myHeaders.append("Access-Control-Request-Method", "OPTIONS,POST,GET");
  
  var requestOptions = {
    method: 'GET',
    // headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://localhost:5000/api/getstudent", requestOptions)
    .then(response => response.json())
    .then(result =>setstudent(result))
    .catch(error => console.log('error', error));
  }, [student])



  function handlesubmit(event){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://infnenzluj.execute-api.us-east-1.amazonaws.com/default/getstudentbyid?id="+id, requestOptions)
      .then(response => response.json())
      .then(result => setstudentdata(result))
      .catch(error => console.log('error', error));
      console.log(studentdata)
  }
  
  return (
    <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={2}></GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <form className={classes.form}
                  noValidate
                  onSubmit={e => {
                    e.preventDefault();
                    handlesubmit();
                  }}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>View student Profile</h4>
           
            </CardHeader>
            <CardBody>
              <GridContainer>
              <GridItem xs={12} sm={12} md={5}></GridItem>
                <GridItem xs={12} sm={12} md={5} className="form-group">
                  <select  className="form-control" onChange={(e) => setid(e.target.value)}>
                  <option aria-label="None" value="">Select studentID</option>
                                                            {student.map(({ cust_id }) => (
                                                                <option value={cust_id} >{cust_id}</option>
                                                            ))}
                  </select>
                </GridItem>
                
              </GridContainer>
            </CardBody>
            <CardFooter >
            <GridContainer>
            <GridContainer>
              
                <GridItem xs={12} sm={12} md={12} className="form-group">
            <Button color="info" style={{marginLeft:360,marginBottom:50,marginTop:20}}   className="col-md-12"type="submit">View student</Button>
                  
                </GridItem>
                
              </GridContainer>
            
            </GridContainer>
            </CardFooter>
          </Card>
          </form>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
</GridItem>
        <GridItem xs={12} sm={12} md={4}>
        {/* <Table>
        <TableHead  >
            <TableRow className={classes.tableHeadRow}>
              <TableCell>Profile</TableCell>
              <TableCell>student Name</TableCell>
              <TableCell>student Email</TableCell>
              <TableCell>Contact No</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
          {studentdata.map((studentdata)=>{
            return(
              <TableRow key={studentdata.cust_id} style={{alignItems:"center"}}> 
              <TableCell><img src={studentdata.cust_image} style={{width:70,height:70,borderRadius:100}}/></TableCell>
              <TableCell>{studentdata.cust_name}</TableCell>
              <TableCell>{studentdata.cust_email}</TableCell>
              <TableCell>{student.cust_mno}</TableCell>

            </TableRow>
            )
           
          })}
        </TableBody>
        </Table> */}
  {studentdata.map((studentdata)=>{
    return(
      <Card profile key={studentdata.cust_id} >
      <CardAvatar profile>
        {studentdata.cust_image===undefined?<a href="#pablo" onClick={e => e.preventDefault()}>
          <img src={avatar} alt="..." />
        </a>:<a href="#pablo" onClick={e => e.preventDefault()}>
          <img src={studentdata.cust_image} alt="..." />
        </a>}
      </CardAvatar>
      
        <CardBody profile  >
        
        <span className={classes.cardCategory}><strong>{studentdata.cust_name}</strong></span>
        <h6 className={classes.cardTitle}><strong>Email:</strong>{studentdata.cust_email}</h6>
        <h6 className={classes.description}>
          <strong>Mobile No:</strong>{studentdata.cust_mno}
        </h6>
        <h6 className={classes.description}>
          <strong>status:</strong>{studentdata.status==0?"Active":"Deactive"}
        </h6>
        
      </CardBody>
     
      
    </Card>

    );
  })}

         
        </GridItem>
      </GridContainer>
    </div>
  );
}
