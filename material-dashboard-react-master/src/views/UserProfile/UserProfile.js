import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import CardHeader from "components/Card/CardHeader.js";
import Card from "components/Card/Card.js";
import GridItem from "components/Grid/GridItem.js";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import GridContainer from "components/Grid/GridContainer.js";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function UserProfile() {
  let history = useHistory();

  const classes = useStyles();
  const [firstName, setfistname] = useState();
  const [lastName, setlastname] = useState();
  const [middlename, setmiddlename] = useState();
  const [gender, setgender] = useState();
  const [address, setaddress] = useState();
  const [dob, setdob] = useState();
  const [mobileno, setmobileno] = useState();
  const [email, setemail] = useState();

  
 
 async function handlesubmit(event) {
   console.log(firstName,lastName,middlename,gender,mobileno,email,address,dob);
  if (
      firstName === undefined ||
      lastName === undefined ||
      middlename === undefined ||
      mobileno === undefined ||
      email === undefined||
      address===undefined||
      dob===undefined||
      mobileno===undefined||
      gender===undefined
    ) {
      alert("All filed are required");
    }  else {
    var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var fd = new URLSearchParams();

      fd.append("fname", firstName);
      fd.append("mname", middlename);
      fd.append("lname", lastName);
      fd.append("gender", gender);
      fd.append("mobile_no", mobileno);
      fd.append("email", email);
      fd.append("dob", dob);
      fd.append("address", address);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: fd,
        redirect: 'follow'
      };

      fetch("http://localhost:5000/api/Registartion", requestOptions)
        .then(response => response.text())
        .then(result => history.push('/admin'))
        .catch(error => console.log('error', error));
    }      
  }
  return (
    <div>
      <GridContainer component="main" maxWidth="xs">
        <GridItem xs={3} sm={3} md={3} ></GridItem>
        <GridItem xs={7} sm={7} md={7}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Add students</h4>
            </CardHeader>

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
                    
                    <Grid item xs={4} sm={4}>
                      <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        onChange={e => setfistname(e.target.value)}
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                      </Grid>
                      <Grid item xs={4} sm={4}>
                      <TextField
                        autoComplete="Mname"
                        name="middleName"
                        variant="outlined"
                        required
                        onChange={e => setmiddlename(e.target.value)}
                        fullWidth
                        id="middleName"
                        label="Middle Name"
                        autoFocus
                      />
                      </Grid>
                      <Grid item xs={4} sm={4}>
                      <TextField
                        autoComplete="Lname"
                        name="LastName"
                        variant="outlined"
                        required
                        onChange={e => setlastname(e.target.value)}
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        autoFocus
                      />
                      </Grid>

                    <Grid item xs={12} sm={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="mno"
                        type="number"
                        label="Mobile No"
                        name="mno"
                        onChange={e => setmobileno(e.target.value)}
                        autoComplete="mno"
                      />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                    <FormControl variant="outlined" fullWidth className={classes.formControl}>
                        <InputLabel variant="outlined"
                           id="demo-simple-select-outlined-label">Gender</InputLabel>
                        <Select
                          variant="outlined"
                          fullWidth
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={gender}
                          onChange={e => setgender(e.target.value)}
                          label="Gender"
                        >
                          <MenuItem value="male">Male</MenuItem>
                          <MenuItem value="female">Female</MenuItem>
                        </Select>
                      </FormControl>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                      <TextField
                       variant="outlined"
                       fullWidth
                        id="date"
                        label="DOB"
                        type="date"
                        defaultValue={Date.now}
                        onChange={(e)=>setdob(e.target.value)}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      </Grid>
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        onChange={e => setaddress(e.target.value)}
                        autoComplete="address"
                      />
                    </Grid>
                    
                  </Grid>
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
                      fontWeight: "bold"
                    }}

                    // onClick={(e)=>{e.preventDefault();register(firstName,lastName,gender,mobileno,address,area,city,email,password,cpassword)}}
                  >
                    Add Student
                  </Button>
                </form>
              </div>
              
            </Container>
          </Card>
        </GridItem>
      
      </GridContainer>
      
    </div>
    
  );
}
