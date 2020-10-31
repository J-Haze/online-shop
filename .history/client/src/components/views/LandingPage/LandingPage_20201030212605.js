import React, {useState, useEffect} from 'react'
import { FaCode } from "react-icons/fa";
import Axios from 'axios';

function LandingPage() {

    const [Products, setProducts] = useState([]);
    

    useEffect(() => {
        Axios.post('/api/product/getProducts')
            .then(response => {
                if (response.data.success) {
                    setProducts(response.data.products)
                    console.log(response.data.products);
                } else {
                    alert('Failed to fetch product data')
                }
            })
    })

    
    return (
      <div id="landing-cont">
            <div id="landing-inner">
                <h2> </h2>


        </div>
      </div>
    );
}

export default LandingPage
