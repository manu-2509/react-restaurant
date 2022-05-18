export const Sort = ({handleFilter,handleSort,handleAll,data,res,handlePayment}) =>{
    return(
        <div>
                      <h1>Restaurant Available</h1>
    <button onClick={(e)=>handleSort(e,res)} className="low">Cost low - top</button>
    <button onClick={(e)=>handleSort(e,res)} className="top">Cost top - low</button>
           <button onClick={()=>handleFilter(1,data)}>1 star</button>
           <button onClick={()=>handleFilter(2,data)}>2 star</button>
           <button onClick={()=>handleFilter(3,data)}>3 star</button>
          <button onClick={()=>handleFilter(4,data)}>4 star</button>
          <button onClick={()=>handleAll(data)}>All</button>
          <button onClick={(e)=>handlePayment(e,data)} className="cash">Cash Only</button>
          <button onClick={(e)=>handlePayment(e,data)} className="card">Card Only</button>
          <button onClick={(e)=>handlePayment(e,data)} className="both">All Payments</button>
        </div>
    )
}