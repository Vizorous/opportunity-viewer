import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";
import OppCard from "./features/OppCard/OppCard";
import { Container } from "react-bootstrap";
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }: { currency: any; rate: any }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}
function App() {
  const [favorited, setFavorited] = useState(false);
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Container fluid="md" className="p-3">
          <OppCard favorited={favorited} setFavorited={setFavorited}></OppCard>
        </Container>
      </div>
    </ApolloProvider>
  );
}

export default App;
