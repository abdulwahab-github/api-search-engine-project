import React, {useState} from 'react'
import "../App.css"
function SearchBar(props) {
    const {title ,search, cols ,searchlist} = props;
   
   
    const [searchval, setsearchval] = useState("")
    const [select, setSelected] = useState("")


const  searval =(e)=>{
    setsearchval(e)

    search(searchval , select)
    
}
  return (
    <>
    <div>
        <input  type="text"  placeholder={select}   
         onChange={(e) => searval(e.target.value)}
            />
           
    </div>
    <div>
        <select onChange={(e) => setSelected(e.target.value)}>
            {/* <option value="">Select</option> */}
            {cols.filter((x)=>{
                if(x.searchAble){
                    return x;
                }
            }).map((x,i)=>
                <option >{x.displayName}</option>
            )}
        </select>
    </div>
    </>
  )
  
}

export default SearchBar