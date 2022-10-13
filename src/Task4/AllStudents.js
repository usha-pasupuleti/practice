import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Students } from "./Info";
import { Typography } from "@mui/material";
const AllStudents = () => {
  return (
    <>
     
      <TableContainer sx={{ width: "80%" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Marks</TableCell>
              <TableCell align="center">Place</TableCell>
              <TableCell align="center">Branch</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Students.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.marks}</TableCell>
                <TableCell align="center">{row.place}</TableCell>
                <TableCell align="center">{row.branch}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllStudents;
