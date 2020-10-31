import React from 'react'
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
        <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span>
            </div>
            <div style={{ float: 'right' }}>Thanks For Using This Boiler Plate by John Ahn</div>
        </>
    )
}

export default LandingPage
