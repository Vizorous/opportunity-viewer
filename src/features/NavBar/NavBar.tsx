import React, { ReactElement } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useResponsive } from "../../utils/customHooks";

import Search from "../Search/Search";

const responsiveResizes = (
  isLG: boolean,
  isXS: boolean,
  isSmallAF: boolean
) => {
  const navWidth: string = isLG ? "w-100 px-0" : "w-90 px-0";
  const searchWidth: string = isLG ? "w-70" : "w-50";
  const sideIconWidth: string = isLG ? "" : "flex-grow-0 navbar__longicons";
  const navBarP: string = isSmallAF
    ? "shadow-sm px-1"
    : isLG
    ? "shadow-sm px-2"
    : "shadow-sm px-0";
  return { navWidth, searchWidth, navBarP, sideIconWidth };
};
interface Props {
  isSearch: boolean;
}
export default function NavBar({ isSearch }: Props): ReactElement {
  const { isLG, isXS, isSmallAF } = useResponsive();
  const { navWidth, searchWidth, navBarP, sideIconWidth } = responsiveResizes(
    isLG,
    isXS,
    isSmallAF
  );

  return (
    <Navbar bg="white" expand="lg" fixed="top" className={`${navBarP} py-3`}>
      <Container
        className={`${navWidth} justify-content-between align-items-center`}
        fluid>
        {!isLG && (
          <Navbar.Brand href="/" className={`${sideIconWidth} m-0 p-0`}>
            <img
              alt="AIESEC logo"
              src="https://cdn-expa.aiesec.org/assets/images/aiesec_logo_black.svg"
              height="26px"></img>
          </Navbar.Brand>
        )}
        {isLG && (
          <Navbar.Brand href="/" className="navbar__A m-0 p-0">
            <img
              alt="AIESEC A"
              src="https://cdn-expa.aiesec.org/assets/images/favicon-white.png"
              height="40px"></img>
          </Navbar.Brand>
        )}
        {/* <Form inline className={`${searchWidth} justify-content-center`}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          {/* <Button variant="outline-success">Search</Button> 
        </Form> */}
        {isSearch ? <Search searchWidth={searchWidth}></Search> : null}
        <Navbar.Toggle
          // aria-controls="basic-navbar-nav"
          className="border-0 p-2 navbar__toggle white-button-click"
        />
        <Navbar.Collapse id={`basic-navbar-nav`} className={`${sideIconWidth}`}>
          <Nav className="ml-auto">
            <Nav.Link
              href="https://aiesec.org/search"
              target="_blank"
              className="px-3">
              YOP
            </Nav.Link>
            <Nav.Link
              href="https://expa.aiesec.org/"
              target="_blank"
              className="px-3">
              EXPA
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

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
