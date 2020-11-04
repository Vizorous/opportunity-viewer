import React, { useState } from "react";

import "./App.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import OppCard from "./features/OppCard/OppCard";
import { Container } from "react-bootstrap";
import NavBar from "./features/NavBar/NavBar";
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

function App() {
  const [favorited, setFavorited] = useState(false);

  return (
    <ApolloProvider client={client}>
      <div>
        <div className="App">
          <NavBar></NavBar>
          <Container fluid="md" className="p-3" style={{ marginTop: "100px" }}>
            <OppCard
              favorited={favorited}
              setFavorited={setFavorited}></OppCard>
          </Container>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
