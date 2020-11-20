import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import Axios from "axios";
import { Icon, Col, Card, Row } from "antd";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";
import RadioGender from "./Sections/RadioGender";
import { price, category, gender } from "./Sections/FilterData";
import SearchFeature from "./Sections/SearchFeature";

const { Meta } = Card;

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(8);
  const [postSize, setPostSize] = useState(0);
  const [searchTerms, setSearchTerms] = useState("");
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
        if (variables.loadMore) {
          setProducts([...Products, ...response.data.products]);
        } else {
          setProducts(response.data.products);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("Failed to fetch product data");
      }
    });
  };

  const onLoadMore = () => {
    let newSkip = skip + limit;

    const newVariables = {
      skip: newSkip,
      limit: limit,
      loadMore: true,
      filters: Filters,
      searchTerm: searchTerms,
    };

    getProducts(newVariables);
    setSkip(newSkip);
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
    const newVariables = {
      skip: 0,
      limit: limit,
      filters: filters,
    };
    getProducts(newVariables);
    setSkip(0);
  };

  const handlePrice = (value) => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };

  const handleGender = (value) => {
    const data = gender;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };

  const handleFilters = (filters, categoryType) => {
    const newFilters = { ...Filters };

    newFilters[categoryType] = filters;

    if (categoryType === "price") {
      let priceValues = handlePrice(filters);
      newFilters[categoryType] = priceValues;
    }

    if (categoryType === "gender") {
      let genderValues = handleGender(filters);
      newFilters[categoryType] = genderValues;
    }

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const updateSearchTerms = (newSearchTerm) => {
    const variables = {
      skip: 0,
      limit: limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };

    setSkip(0);
    setSearchTerms(newSearchTerm);

    getProducts(variables);
  };

  return (
    <div id="landing-cont">
      <div id="landing-inner">
        <h1 id="landing-title">
          Justin's Clothing Store
        </h1>
      </div>

      <Row gutter={[16, 16]}>
        <Col lg={8} xs={24}>
          <RadioGender
            list={gender}
            handleFilters={(filters) => handleFilters(filters, "gender")}
          />
        </Col>

        <Col lg={8} xs={24}>
          <CheckBox
            list={category}
            handleFilters={(filters) => handleFilters(filters, "category")}
          />
        </Col>
        <Col lg={8} xs={24}>
          <RadioBox
            list={price}
            handleFilters={(filters) => handleFilters(filters, "price")}
          />
        </Col>
      </Row>

      {/* Search */}
      <div id="search-cont">
        <SearchFeature refreshFunction={updateSearchTerms} />
      </div>

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

      {postSize >= limit && (
        <div id="load-button-cont">
          <button onClick={onLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
