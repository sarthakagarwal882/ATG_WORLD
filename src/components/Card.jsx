/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./CardStyles.css"
const Card=(props)=>{
    let{img,type,header,intro,date,location,button,profile,company,views}=props
    console.log(img,type,header,intro,date,location,button,profile,company,views);
    return (
        <div className="card">
            {/* <div className="card-img"></div> */}
            <img src="/src/assets/card-1.svg" alt="img" />
        </div>
    )
}
export default Card