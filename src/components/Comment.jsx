import { useEffect, useState } from "react";
import SMGrid from "./SMGrid";
import Loader from './Loader'
import SearchBar from "./SearchBar";
import { Get } from '../config/Apibasemethods'
import { Box } from '@mui/material'

function CommentsScreen() {
  const [listData, setListData] = useState([]);
  const [selected, setselected] = useState("")
  const [comt, setcomt] = useState([])
  const [data , setdata] = useState([])
    const [loading , setloading] = useState(true)
    const [values, setvalues] = useState("")

  const [first , setfirst] = useState([]) 
  let cols = [
    {
      displayName: "Id",
      key: "id",
      
    },
    {
      displayName: "User Name",
      key: "name",
      searchAble: true,
    },
    {
      displayName: "User Email",
      key: "email",
      searchAble: true,
    },
    {
      displayName: "Content",
      key: "body",
    },
    {
      displayName: "Post",
      key: "postId",
    },
  ];

  let getData = () => {
    Get("comments")
      .then((res) => {
        if (res.data) {
        setloading(false)
        setListData([...res.data]);
        }
      })
      .catch((err) => {
        setloading(false)
      });
  };
  useEffect(() => {
    getData();
  }, []);
  
  const ser = (e, sel) => {
    setvalues(e)
    setselected(sel)
    // console.log(selected)
  }
  return (
    <>
  
      <SearchBar  title="Search here :)" 
     search={ser}
     cols={cols}
      />

      <br/>  
      <div>
      {loading ?  <Box sx={{
        marginLeft:"50vh",
        marginTop:"30vh"
       
     }}>
    <Loader />
    </Box> : <SMGrid val={values} dat={comt} sel={selected} title="Comments" datasource={listData} cols={cols}/>}
      </div>
      
    </>
  );
}
export default CommentsScreen;