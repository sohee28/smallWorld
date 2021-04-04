import React, { useEffect, useState } from "react";
import Axios from "axios";
import ImageSlider from "../../util/ImageSlider";
import { Icon, Col, Card, Row } from "antd";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";
import { price, clothKinds } from "./Sections/Datas";
import SearchFeature from "./Sections/SearchFeature";

const { Meta } = Card;

function LandingPage(props) {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState(0);
  const [Filters, setFilters] = useState({ kinds: [], price: [] });
  const [SearchTerms, setSearchTerms] = useState("");

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };
    getProducts(variables);
  }, []);

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24}>
        <Card
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
        alert("Failed to fetch product datas");
      }
    });
  };

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    };
    getProducts(variables);
    setSkip(skip);
  };

  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };
    getProducts(variables);
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
    console.log(array);
    return array;
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };
    newFilters[category] = filters;
    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }
    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const updateSearchTerm = (newSearchTerm) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };
    setSkip(0);
    setSearchTerms(newSearchTerm);
    getProducts(variables);
  };

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2>
          Enjoy The Little Thing
          <Icon
            type="car"
            style={{ marginLeft: "1rem", color: "#ffbd59" }}
            theme="outlined"
          />
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0.5rem auto",
        }}
      >
        <SearchFeature refreshFunciton={updateSearchTerm} />
      </div>
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Row justify="center">
          <Col
            lg={24}
            xs={24}
            style={{
              borderRadius: "10px",
            }}
          >
            <CheckBox
              list={clothKinds}
              handleFilters={(filters) => handleFilters(filters, "kinds")}
            />
          </Col>
          <Col
            lg={24}
            xs={24}
            style={{ marginTop: "1rem", marginBottom: "2rem" }}
          >
            <RadioBox
              list={price}
              handleFilters={(filters) => handleFilters(filters, "price")}
            />
          </Col>
        </Row>
      </div>
      {Products.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>No post yet...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 48]}>{renderCards}</Row>
        </div>
      )}
      <br />
      <br />
      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className='loadMoreBtn'
            onClick={onLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
