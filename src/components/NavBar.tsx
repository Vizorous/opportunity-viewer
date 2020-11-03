import React, { useMemo } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { useResponsiveContext } from "../App";
const responsiveResizes = (isMobile) => {
  const navWidth: string = isMobile ? "w-100" : "w-85";
  const searchWidth: string = isMobile ? "w-65" : "w-50";
  const brandWidth: string = isMobile ? "w-10 mr-0" : "w-25";
  const collapseWidth: string = isMobile ? "w-10" : "w-25";
  return { navWidth, searchWidth, brandWidth, collapseWidth };
};
export default function NavBar() {
  const { isMobile } = useResponsiveContext();
  const {
    navWidth,
    brandWidth,
    collapseWidth,
    searchWidth,
  } = responsiveResizes(isMobile);
  return (
    <Navbar bg="white" expand="sm" fixed="top" className="shadow-sm">
      <Container className={navWidth} fluid>
        <Navbar.Brand href="#home" className={`${brandWidth}`}>
          {!isMobile && (
            <img
              src="https://cdn-expa.aiesec.org/assets/images/aiesec_logo_black.svg"
              height="70%"></img>
          )}
          {isMobile && (
            <img
              src="https://cdn-expa.aiesec.org/assets/images/favicon-white.png"
              height="46px"></img>
          )}
        </Navbar.Brand>
        <Form inline className={`${searchWidth} justify-content-center`}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          {/* <Button variant="outline-success">Search</Button> */}
        </Form>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 p-2 navbar__toggle"
        />
        <Navbar.Collapse id={`basic-navbar-nav ${collapseWidth}`}>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  //   return (
  //     <div>
  //       <Navbar bg="white" expand="sm" variant="light" fixed="top">
  //         {/* <Container fluid className="justify-content-center"> */}
  //         {/* <Col lg={10} sm={10} xs={12} md={10}> */}
  //         {/* <Row> */}
  //         {/* <Col className="d-flex align-items-center justify-content-start"> */}
  //         <Navbar.Brand href="#home">
  //           {!isMobile && (
  //             <img
  //               src="https://cdn-expa.aiesec.org/assets/images/aiesec_logo_black.svg"
  //               height="70%"></img>
  //           )}
  //           {isMobile && (
  //             <img
  //               src="https://cdn-expa.aiesec.org/assets/images/favicon-white.png"
  //               height="40px"></img>
  //           )}
  //         </Navbar.Brand>

  //         {/* </Col> */}
  //         {/* <Col className="d-flex align-items-center justify-content-center"> */}
  //         <Form inline>
  //           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //           {/* <Button variant="outline-success">Search</Button> */}
  //         </Form>
  //         {/* </Col> */}
  //         {/* <Col className="d-flex align-items-center justify-content-end"> */}
  //         <Nav id="basic-navbar-nav">
  //           <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //           <Navbar.Collapse
  //             style={{ width: "fit-content" }}
  //             id="basic-navbar-nav"
  //             className="justify-content-end">
  //             <Nav.Link href="#link">Help</Nav.Link>
  //             <Nav.Link href="#link">Log In</Nav.Link>
  //           </Navbar.Collapse>
  //         </Nav>
  //         {/* </Col> */}
  //         {/* </Row> */}
  //         {/* </Col> */}
  //         {/* </Container> */}
  //       </Navbar>
  //     </div>
  //   );
}
