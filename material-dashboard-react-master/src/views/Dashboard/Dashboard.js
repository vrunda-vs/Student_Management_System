import React,{useState,useEffect} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";

import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";



import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
const [student,setstudent]=useState([])
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      // headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("http://localhost:5000/api/getstudent", requestOptions)
    .then(response => response.json())
    .then(result =>setstudent(result.data))
    .catch(error => console.log('error', error));
  }, [student])


  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total students</p>
               <h3 className={classes.cardTitle}>{student.length}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
              <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Active students</p>
              <h3 className={classes.cardTitle}>{student.length}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <Update />

                Just Updated

              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
              <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Deactive students</p>
              <h3 className={classes.cardTitle}>0</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <Update />

                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
      
      <GridContainer>
        
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Our students</h4>
              
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={[]}
                tableData={[
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
