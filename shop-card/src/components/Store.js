import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";
import '../../src/App.css'
const Store = () => {
  return (
    <>
      <h1 className="title2">Store Card</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;