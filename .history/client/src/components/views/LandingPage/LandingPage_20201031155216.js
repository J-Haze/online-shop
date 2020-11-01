import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import Axios from "axios";
import { Icon, Col, Card, Row } from "antd";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Sections/CheckBox"

const { Meta } = Card;

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(8);
  const [postSize, setPostSize] = useState(0);

    const [Filters, setFilters] = useState({
        category: [],
        price: [],
    });

  useEffect(() => {
    const variables = {
      skip: skip,
      limit: limit,
    };
    getProducts(variables);
  }, []);

  const getProducts = (variables) => {
    Axios.post("/api/product/getProducts", variables).then((response) => {
      if (response.data.success) {
        setProducts(response.data.products);
        // console.log(response.data.products);
        setPostSize(response.data.postSize);
      } else {
        alert("Failed to fetch product data");
      }
    });
  };

  const onLoadMore = () => {
    let newSkip = skip + limit;

    const newVariables = {
      newSkip: skip,
      newLimit: limit,
      //   loadMore: true,
      //   filters: Filters,
      //   searchTerm: SearchTerms,
    };

    getProducts(newVariables);
    setSkip(newSkip);

    //   console.log({ newSkip })
    //   console.log({ skip });
    // //   console.log({ newLimit });
    //   console.log({ limit });

    console.log("PS:", postSize);
    console.log("limit", limit);
  };

  const renderCards = Products.map((product, index) => {
    return (
      <Col className="col" lg={6} md={8} xs={12} key={index}>
        <Card
          className="product-card"
          hoverable={true}
          cover={
            <a href={`/product/${product._id}`}>
              <ImageSlider images={product.images} />
            </a>
          }
        >
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });
    

    const showFilteredResults = (filters) => {
      const variables = {
        newSkip: 0,
        newLimit: limit,
        filters: filters,
      };
      getProducts(variables);
      setSkip(0);
    };

    
    
    
        const handleFilters = (filters, categoryType) => {
          const newFilters = { ...Filters };

          newFilters[categoryType] = filters;

        //   if (categoryType === "price") {
        //     let priceValues = handlePrice(filters);
        //     newFilters[categoryType] = priceValues;
        //   }

          console.log(newFilters);

          showFilteredResults(newFilters);
          setFilters(newFilters);
        };
    

  return (
    <div id="landing-cont">
      <div id="landing-inner">
        <h2>
          ACME Clothing Co.
          {/* <Icon type="rocket" />{" "} */}
        </h2>
      </div>

      <CheckBox
        handleFilters={(filters) => handleFilters(filters, "category")}
      />

      {Products.length === 0 ? (
        <div id="products-list">
          <h2>No posts yet...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}

      <br />
      <br />

      {postSize <= limit && (
        <div id="load-button-cont">
          <button onClick={onLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
