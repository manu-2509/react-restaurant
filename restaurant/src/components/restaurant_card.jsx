import data from "../data.json"
import {useState} from "react"
import "./Styles/res.css"
import {Sort} from "./Sort"
import {v4 as uuid} from "uuid"
import { AddRes } from "./AddRes"

export const Restaurant=()=>{
    const [res,setRes] = useState(data.restaurants)
    const [rate,setRate] = useState(true)
    const [nul,setNul] = useState(false)
    const handleSort=(e,res)=>{
        if(e.target.className=="low"){
       setRes([...res.sort((a,b)=>a.cost_for_one-b.cost_for_one)])
       setRate(false)
        }else if(e.target.className=="top"){
            setRes([...res.sort((a,b)=>b.cost_for_one-a.cost_for_one)])
            setRate(false)
        }
    }
    const handleFilter=(value,Data)=>{
        setRes([...Data.sort((a,b)=>b.rating-a.rating)])
       setRes([...Data.filter(rest=>rest.rating>value)])
    }
    const handleAll=(val)=>{
        setRes(val)
        setRate(true)
    }
    const handlePayment=(e,Data)=>{
        if(e.target.className=="cash"){
        setRes([...Data.filter(rest=>rest.payments_method=="cash")])
        }
        else if(e.target.className=="card"){
            setRes([...Data.filter(rest=>rest.payments_method=="online payments")])
        }
        else if(e.target.className=="both"){
            setRes(Data)
        }
    }
    const changeEle=()=>{
        setNul(!nul)
    }
   
    return(
      <>
      {nul?<AddRes></AddRes>:null}
      <button onClick={changeEle}>{nul?"Hide":"Add Restaurant"}</button>
      <Sort handleSort={handleSort} handleFilter={handleFilter} handleAll={handleAll} data={data.restaurants} res={res} handlePayment={handlePayment}></Sort>
   
 <div className="main">
       {res.map((e)=>{

           return(
              <div key={uuid()} className="container">
             <div className="restaurant">
                 <img src={e.image} alt="" className="image" />
                 <div className="mid-div">
                     <h3>{e.hotel_name}</h3>
                     <div className="category">
                           {e.categories.map((c)=>(
                         <p>{c.cat},</p>
                     ))} 
                     </div>
                  
                     {rate? <p>Cost ₹{e.cost_for_one} for one</p>:<p>Cost ₹{e.cost_for_one*2} for two</p>}
                     <p>Accepts {e.payments_method} only</p>
                 </div>
                 <div className="last_div">
                     <h2 className="rating">{e.rating}</h2>
                     <p>{e.total_votes} votes</p>
                     <p>{e.reviews} reviews</p>
                 </div>
                
             </div>
             <button className="button">Order Now</button>
             </div>
)})}
       </div>
       </>
    )
}