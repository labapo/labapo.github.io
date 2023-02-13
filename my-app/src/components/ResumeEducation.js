import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(school, degree, location, yearCompleted) {
  return { school, degree, location, yearCompleted};
}

const rows = [
  createData('Per Scholas', "MERN Stack Certification", "Denver, CO", "Feb. 2023"),
  createData('Touro College',"M.A General and Special Education", "New York, NY","2015"),
  createData('University of North Florida', "M.A. Applied Ethics and Philosophy", "Jacksonville, FL", "2012"),
  createData('University of Central Florida', "B.A. Philosophy", "Orlando, FL", 2010, ),
];

export default function EducationTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead style={{backgroundColor: "#E8E8E8"}}>
          <TableRow>
            <TableCell>School</TableCell>
            <TableCell align="center">Degree/Certification</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Year Compoleted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.school}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.school}
              </TableCell>
              <TableCell align="center">{row.degree}</TableCell>
              <TableCell align="center">{row.location}</TableCell>
              <TableCell align="center">{row.yearCompleted}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}