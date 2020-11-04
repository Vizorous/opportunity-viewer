import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

import "./App.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import OppCard from "./features/OppCard/OppCard";
import { Container } from "react-bootstrap";
import NavBar from "./features/NavBar/NavBar";
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});
interface IResponsiveContext {
  isXs: boolean;
  isLg: boolean;
}
export const ResponsiveContext = React.createContext<IResponsiveContext>({
  isXs: false,
  isLg: false,
});
export const useResponsiveContext = () => useContext(ResponsiveContext);

function App() {
  const [favorited, setFavorited] = useState(false);
  const isXs: boolean = useMediaQuery({ maxWidth: 576 });
  const isLg: boolean = useMediaQuery({ maxWidth: 992 });

  return (
    <ApolloProvider client={client}>
      <ResponsiveContext.Provider value={{ isXs: isXs, isLg: isLg }}>
        <div>
          <div className="App">
            <NavBar></NavBar>
            <Container
              fluid="md"
              className="p-3"
              style={{ marginTop: "100px" }}>
              <OppCard
                favorited={favorited}
                setFavorited={setFavorited}></OppCard>
              {/* <div
                style={{
                  height: "1000vh",
                  width: "10vw",
                  backgroundColor: "red",
                }}></div> */}
            </Container>
          </div>
        </div>
      </ResponsiveContext.Provider>
    </ApolloProvider>
  );
}

export default App;
