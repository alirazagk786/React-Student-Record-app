
import { Box } from '@mui/system'
import React,{useEffect , useState} from 'react'
import YearCalcultion from './YearCalcultion'

const Home = () => {
    const [student_data,setStudentData]=useState();
    const [year , setYear]=useState([]);
    // let arr=[];
    // let flag=false

    useEffect(()=>{
        getData();
    },[])

    const getData=async ()=>{
        const response=await fetch('http://apitest.sertifi.net/api/Students');
        const data=await response.json();
        setStudentData(data);
        yearSetting(data);
    }
    // let index=0;
    
    const yearSetting=(data)=>{
        let start_year=[],
            end_year=[],
            years=[];
        for (let i = 0; i < data.length; i++) {
            start_year.push(data[i].StartYear);
            end_year.push(data[i].EndYear);
        }
        // console.log(Math.min(...start_year) +"-"+ Math.max.apply(Math,end_year));
        for (let i = Math.min(...start_year) ; i <= Math.max(...end_year) ; i++) {
            years.push(i)
        }
        setYear(years)
        // for (let i = 0; i < data.length; i++) {
        //     for (let j =data[i].StartYear ; j <= data[i].EndYear; j++) {
        //         for (let k = 0; k < arr.length; k++) {
        //            if(arr[k]===j)flag=true
        //         // if(arr[k]!=j) arr[index++]=j;
        //         }
        //         if(!flag) arr[index++]=j;
        //         flag=false;
        //     }
        // }
        // arr.sort((a,b)=>{
        //     return a-b
        // })
    }

  return (
                 <Box>
                   { student_data &&
                   <div >
                        <YearCalcultion
                        year={year}
                        student_data={student_data}
                         />
                    </div>}
                   </Box>
  )
}

export default Home;