import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import OppCard from "./features/OppCard/OppCard";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});
interface IResponsiveContext {
  isMobile: boolean;
}
export const ResponsiveContext = React.createContext<IResponsiveContext>({
  isMobile: false,
});
export const useResponsiveContext = () => useContext(ResponsiveContext);

function App() {
  const [favorited, setFavorited] = useState(false);
  const isMobile: boolean = useMediaQuery({ maxWidth: 576 });

  return (
    <ApolloProvider client={client}>
      <ResponsiveContext.Provider value={{ isMobile }}>
        <div>
          <div className="App">
            <NavBar></NavBar>
            <Container fluid="md" className="p-3">
              <OppCard
                favorited={favorited}
                setFavorited={setFavorited}></OppCard>
              <div
                style={{
                  height: "1000vh",
                  width: "10vw",
                  backgroundColor: "red",
                }}></div>
            </Container>
          </div>
        </div>
      </ResponsiveContext.Provider>
    </ApolloProvider>
  );
}

export default App;
