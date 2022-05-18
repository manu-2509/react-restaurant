import "./Style.css"
export const Head=({head,subhead})=>{
    return(
        <div className="head">
            <h3 className="main">{head}</h3>
            <h2>{subhead}</h2>
        </div>
    )
}