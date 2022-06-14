import React from "react";
// import Container from "@mui/material/Container";
import { traerProductos } from "../utils/productos";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    traerProductos()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    // <Container 
    //   style={{ backgroundColor: "red" }}
    //   maxWidth="xl">
    //   <ItemList items={products} onItemClick={onItemClick} />
    // </Container>
    <ItemList items={products}/>
  );
};

export default ItemListContainer;
