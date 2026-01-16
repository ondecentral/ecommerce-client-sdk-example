import { Navbar, Main, Product, Footer, ConsentBanner  } from "../components";
import lucia from "lucia-sdk";
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    lucia.pageView("Home");
  }, []);
  return (
    <>
      <Navbar />
      <Main />
      <Product />
      <Footer />
      <ConsentBanner />
    </>
  )
}

export default Home
