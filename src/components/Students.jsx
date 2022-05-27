import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { store } from "./Detail";

export default function Student() {
  const [rows] = useContext(store);

  const Id = new Date().getTime().toString();

  return (
    <div>
      <div className="mains">
        <h1 className="one">Student Details</h1>
        <button className="btn btn-success">
          <Link to={`/student/add/${Id}`}>Add New Student</Link>
        </button>
      </div>

      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWIdth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Course</TableCell>
                <TableCell align="right">Batch</TableCell>
                <TableCell align="right">Change</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.Id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.course}</TableCell>
                  <TableCell align="right">{row.batch}</TableCell>
                  <TableCell align="right">
                    <Link to={`/student/edit/${row.Id}`}>
                      <button className="btn btn-warning">Edit</button>{" "}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
