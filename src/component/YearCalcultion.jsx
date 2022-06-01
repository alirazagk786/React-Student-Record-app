import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import YearSummary from "./YearSummary";

const YearCalcultion = ({ year, student_data }) => {
  const [yearData, setYearData] = useState([]);
            

  useEffect(() => {
    setYearsData();
  }, []);

  const setYearsData = () => {
    let students = [];
    for (let i = 0; i < year.length; i++) {
      let student_each_year = [];
      let sumGpa=0;
      for (let j = 0; j < student_data.length; j++) {
        let index = 0;
        for (let k = student_data[j].StartYear; k <= student_data[j].EndYear;k++) {
          if (year[i] === k) {
            sumGpa=sumGpa+student_data[j].GPARecord[index]
            student_each_year.push(student_data[j]);
          }
          index++;
        }
      }
      sumGpa=sumGpa/student_each_year.length;
      students.push({
        Year: year[i],
        SumGPA : sumGpa.toFixed(2),
        students: student_each_year,
      });
    }
    setYearData(students);
  };
  
  return (
  <Box sx={{}}>
    {
      yearData?.map((year_data,index)=>{
        return(
            <Box key={index} sx={{ width : "100%" ,display : "flex" , flexDirection : "column" , alignItems: "center"}}>
              <YearSummary year_data={year_data}/>
            </Box>
        )
        })
        }
  </Box>
  )
};

export default YearCalcultion;
