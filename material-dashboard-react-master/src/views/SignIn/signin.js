import React,{useEffect,useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import avatar from "assets/img/faces/marc.jpg";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
    
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    
    
  },
  heade:{
    textAlign:"center",
    fontWeight:600,
    
  }
};

const useStyles = makeStyles(styles);

export default function SignIn() {
  const classes = useStyles();
  const history=useHistory();
    const[email,setemail]=useState();
    const[password,setpassword]=useState();
    const[status,setstatus]=useState(false);
    const[statuspass,setstatuspass]=useState(false);


  


  async function handlesubmit(event){
    // history.push('/admin')
    var formdata = new FormData();
    formdata.append("email",email);
    formdata.append("cust_password", password);

    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://vfud48ok02.execute-api.us-east-1.amazonaws.com/default/signin", requestOptions)
      .then(response => response.json())
      .then(result => {
       if(result==='correct'){
           
        localStorage.setItem('email',email);
        history.push('/admin')}
       else if(result==='emailnot') {
            // alert("Email or Password incorrect!")
            setstatus(true)
       }
       else{
        setstatus(false)
        setstatuspass(true)
       }
    })
      .catch(error => console.log('error', error));
      
  }
  
  return (
    <div style={{alignItems:"center",marginTop:"150px"}}>
      <GridContainer>
      <GridItem xs={12} sm={12} md={4}></GridItem>
      

      <GridItem xs={12} sm={12} md={4}>
          {status==true?<CardHeader color="danger" className={classes.heade} >
              <h5 className={classes.cardTitleWhite} >Email Not Exits!!</h5>
           
            </CardHeader>:statuspass==true?<CardHeader color="danger" className={classes.heade} >
              <h5 className={classes.cardTitleWhite} >Password incorrect!!</h5>
           
            </CardHeader>:<p></p>}
      </GridItem>
      <GridItem xs={12} sm={12} md={3}></GridItem>
      <GridItem xs={12} sm={12} md={3}></GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <form className={classes.form}
                  noValidate
                  onSubmit={e => {
                    e.preventDefault();
                    handlesubmit();
                  }}>
          <Card>
            <CardHeader color="info" className={classes.heade} >
              <h4 className={classes.cardTitleWhite} >SignIn</h4>
           
            </CardHeader>
            <CardBody style={{marginTop:20}}>
            <Container>
              <div className={classes.paper}>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={e => {
                    e.preventDefault();
                    handlesubmit();
                  }}
                >
                  <Grid container spacing={2}>
                   

                   
                  <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={e => setemail(e.target.value)}
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={2}></Grid>

                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} className="pass-wrapper">
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={
                          (e => setpassword(e.target.value))
                        }
                      />

                      {/* <i>{eye}</i> */}
                    </Grid>
                    <Grid item xs={2}></Grid>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="info"
                    className={classes.submit}
                    style={{
                      background: "#13B9CE",
                      backgroundColor: "#13B9CE",
                      border: "1px bold #13B9CE",
                      borderColor: "#fff",
                      color: "#fff",
                      padding: 10,
                      fontWeight: "bold",
                      marginTop:20
                    }}

                    // onClick={(e)=>{e.preventDefault();register(firstName,lastName,gender,mobileno,address,area,city,email,password,cpassword)}}
                  >
                   SignIn
                  </Button>
                 
                  </Grid>
                  </Grid>
                

                  
                </form>
              </div>
            </Container>
            </CardBody>
            <CardFooter >
            <GridContainer>
            <GridContainer>
              
                <GridItem xs={12} sm={12} md={12} className="form-group">
                
                </GridItem>
                
              </GridContainer>
            
            </GridContainer>
            </CardFooter>
          </Card>
          </form>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
</GridItem>
        
         
        
      </GridContainer>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />
    </div>
   
  );
  
}

