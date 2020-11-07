import React from "react";

import "./App.scss";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";
import Routes from "./routes/Routes";
const client = new ApolloClient({
  uri:
    "https://api-staging.aiesec.org/graphql?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c",
  cache: cache,
  connectToDevTools: true,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Routes></Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
