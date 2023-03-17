import React, { useEffect, useState } from 'react'
import { Get } from '../config/Apibasemethods'
import Loader from './Loader'
import { Box } from '@mui/material'
function Post() {
    const [data , setdata] = useState([])
    const [loading , setloading] = useState(true)
    let getdata = () =>{
        Get('posts').then(res =>{
            console.log(res)
            setdata([...res.data]);
            setloading(false)
        }).catch(err =>{
            console.log(err)
            setloading(false)

        } )
    }
    useEffect(() => {
        getdata()
      
    } ,[])
  return (
    <>

   {
    loading ? <Box sx={{
        marginLeft:"50vh",
        marginTop:"30vh"
       
     }}>
    <Loader />
    </Box> :
   data.map((x,i)=><div className='rounded dark shadow p-3'>
   <h4 className='w-20'> <b>{x.title}</b></h4>
    {/* <p>{x.body}</p> */}
    <i><p>{x.body}</p></i>

   </div>)}
    

 


    </>
  )
}

export default Post