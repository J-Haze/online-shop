import React, {useState, useEffect} from 'react'
import { FaCode } from "react-icons/fa";
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';

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
                <h2> ACME Clothing Co. <Icon type="rocket" /> </h2>

                {Products.length === 0 ? 
                    <div id="products-list">
                        <h2>No posts yet...</h2>
                    </div> :
                    <div>
                        <Row>
                            
                        </Row>
                    </div>
                 }

        </div>
      </div>
    );
}

export default LandingPage
