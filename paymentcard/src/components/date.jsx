import "./Style.css"
export const Date=({date,image})=>{
    return(
        <div className="date">
          <p>{date}</p>  
          <img src={image} alt="logo" className="logo"></img>
        </div>
        
    )
}