import { Date } from "./date"
import { Device } from "./device"
import {Head} from "./Head"
import "./Style.css"
import {AiOutlineArrowRight} from "react-icons/ai"
export const Payment=({color ,date,image,head,subhead,device1,device2})=>{
    return(
        <div className="card1" style={{backgroundColor:color}}>
            <Date date={date} image={image}></Date>  
            <Head head={head} subhead={subhead}></Head>
            <div className="p-device">
              <Device device1={device1} device2={device2}></Device> 
              <AiOutlineArrowRight className="icon"/>
              </div>
              
        </div>

    )
}