import { Navbar, Main, Product, Footer, ConsentBanner  } from "../components";
import lucia from "../lucia";

function Home() {
  lucia.pageView("Home");
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