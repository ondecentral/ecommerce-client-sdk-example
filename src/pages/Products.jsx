import React from 'react'
import { Footer, Navbar, Product } from "../components"
import lucia from 'lucia-sdk'

const Products = () => {
  lucia.pageView("Products");
  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  )
}

export default Products
