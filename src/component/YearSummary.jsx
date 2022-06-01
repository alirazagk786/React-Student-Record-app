import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import React,{useState} from 'react'

const YearSummary = ({year_data}) => {
    const [flag ,setFlag]=useState(false)

  return (
    <Box sx={{ width: "70%" , marginTop: "6vh" , textAlign: "center" }}>
        <Card variant="outlined"> 
        <CardContent>
        <Typography variant="h6" color="inherit" component="div" bgcolor={"lightblue"}>
         Summary Year : {year_data.Year}
         </Typography>
        <Box sx={{float : "left"}}>
        <Typography  color="inherit" variant="h6" gutterBottom >
         Total Students : {year_data.students.length}
        </Typography>
        <Typography  color="inherit" variant="h6" gutterBottom sx={{float : "left"}}>
        Total CGPA : {year_data.SumGPA}
        </Typography>
        </Box>
        <Button variant="contained" size="medium" sx={{marginTop:"25px" , float: "right"}} onClick={(e)=>{setFlag(true)}}>
          See Details
        </Button>
        <div style={{display : flag ? "block" : "none" , marginTop: "20px 0"}}  > 
            <ul>
            {
                year_data?.students.map((student,index)=>{
                    return(
                        <li key={index}>
                        <p> <strong>Student Id :  </strong>{student.Id} </p>
                        <p> <strong> Student Name : </strong>{student.Name} </p>
                        <p> <strong>GPA : </strong>{student.GPARecord[Math.abs(year_data.Year - student.StartYear)]} </p>
                        </li>
                    )
                })
            }
            </ul>
            <Button variant="contained" size="medium" sx={{marginTop:"10px"}} onClick={()=>setFlag(false)}>
          See Less
        </Button>
        </div>
      </CardContent>
        </Card>
    </Box>
  )
}

export default YearSummary