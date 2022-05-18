import "./Style.css"
export const Device=({device1,device2})=>{
    return(
        <div className="device">
            <h4>{device1}</h4>
            <h4>-</h4>
            <h4>{device2}</h4>
        </div>
    )
}