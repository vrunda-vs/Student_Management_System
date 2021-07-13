import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { MDBDataTable } from 'mdbreact';
import Moment from 'moment';
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  const [student,setstudent]=useState([]);
 
useEffect(() => {
  var myHeaders = new Headers();
  // myHeaders.append("Access-Control-Allow-Origin", "*");
  // myHeaders.append("Access-Control-Allow-Headers", "application/json");
  // myHeaders.append("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
  // myHeaders.append("Access-Control-Request-Method", "OPTIONS,POST,GET");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:5000/api/getstudent", requestOptions)
    .then(response => response.json())
    .then(result =>setstudent(result.data))
    .catch(error => console.log('error', error));


 
}, [student])

return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
       
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              <TableCell> FirstName</TableCell>
              <TableCell> LastName</TableCell>
              <TableCell> Email</TableCell>
              <TableCell>Contact No</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Address</TableCell>
              
            </TableRow>
          </TableHead>
       
        <TableBody>
          {student.map((student)=>{
            return(
              <TableRow key={student.id} style={{alignItems:"center"}}> 
              <TableCell>{student.fname}</TableCell>
              <TableCell>{student.lname}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.mobile_no}</TableCell>
              <TableCell>{Moment(student.dob).format('DD-MM-YYYY')}</TableCell>
              <TableCell>{student.address}</TableCell>
            </TableRow>
            )
           
          })}
        </TableBody>
      </Table>
       {/* <MDBDataTable
      striped
      bordered
      small
      data={student}
    /> */}
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
