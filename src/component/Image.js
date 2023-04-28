import { useState } from "react";
import "../component.css"
import { MoreDetails } from "./Article";
import { Aside } from "./Aside";
import Review from "./Review";
import axios from "axios";
import {useEffect} from "react";

function Image() {

    const [products, setproducts] = useState([])

useEffect(()=>{
    axios.get("https://e-commerce-backend-itur.onrender.com/getdata")
    .then(res=>setproducts(res.data))
    .catch(error=>console.log(error));
},[])


    return products.map((item, index) =>
    <div className="App" key={index}>
        <div >
            <div className="image-aside">
                <img src={item.Image} alt="girls image" className="image1" />
                <Aside {...item}/>
            </div>
            <div id="combined">
                <MoreDetails more_details={item.more_details} />
                <Review Reviews={item.Reviews} />
            </div>
        </div>
    </div>    )
}

export default Image;