import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import OppCard from "./features/OppCard/OppCard";
import { Container } from "react-bootstrap";
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
            <Container fluid="md" className="p-3">
              <OppCard
                favorited={favorited}
                setFavorited={setFavorited}></OppCard>
            </Container>
          </div>
        </div>
      </ResponsiveContext.Provider>
    </ApolloProvider>
  );
}

export default App;
