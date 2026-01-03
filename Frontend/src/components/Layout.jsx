import { Outlet } from "react-router-dom";

import Header from "./Header";
import Wrapper from "./Wrapper";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Wrapper>
    <Header searchValue={false} />
    <Outlet/>
    <Footer/>
    </Wrapper>
  )
}

export default Layout