import React from "react";
import {Link} from "react-router-dom"; 
import {Col, Navbar} from "react-bootstrap";

import Header, {HeaderNav, Menu} from "./Header";

const UmelleHeader = ({props}) => {
  return(
      <Header topSpace={{md: true}} type="reverse-scroll">
          <HeaderNav fluid="fluid" theme="light" expand="lg"
                     className="py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0">
              <Col lg={2} sm={6} xs={"auto"} className="mr-auto ps-0">
                  <Link aria-label="header logo" className="flex items-center" to="/">
                      <Navbar.Brand className="inline-block p-0 m-0">
                          <img className="default-logo" width="111" height="36"
                               src='/assets/img/webp/umelle-logo.webp'
                               data-rjs='/assets/img/webp/umelle-logo.webp' alt='logo'/>
                          <img className="alt-logo" width="111" height="36"
                               src='/assets/img/webp/umelle-logo.webp'
                               data-rjs='/assets/img/webp/umelle-logo.webp' alt='logo'/>
                          <img className="mobile-logo" width="111" height="36"
                               src='/assets/img/webp/umelle-logo.webp'
                               data-rjs='/assets/img/webp/umelle-logo.webp' alt='logo'/>
                      </Navbar.Brand>
                  </Link>
              </Col>
              <Navbar.Toggle className="order-last md:ml-[17px] w-[25px] min-h-[15px] inline-block align-middle">
                  <span className="navbar-toggler-line"></span>
                  <span className="navbar-toggler-line"></span>
                  <span className="navbar-toggler-line"></span>
                  <span className="navbar-toggler-line"></span>
              </Navbar.Toggle>
              <Navbar.Collapse className="justify-center col-auto col-lg-8">
                  <Menu {...props} />
              </Navbar.Collapse>
              <Col lg={2} xs={"auto"} className="justify-end pe-0 flex items-center"></Col>
          </HeaderNav>
      </Header>
  )
}

export default UmelleHeader;