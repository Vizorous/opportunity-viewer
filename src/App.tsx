import React from "react";

import "./App.scss";
import { ApolloClient, ApolloProvider, useReactiveVar } from "@apollo/client";
import { cache, isSearchVar } from "./cache";
import SearchRoute from "./routes/SearchRoute";
import { Redirect, Route } from "react-router-dom";
import ErrorAlert from "./components/LikeButton/ErrorAlert";
import { authLink, httpLink } from "./utils/fetchOperations";
// import Opp from "./routes/Opp";
import NavBar from "./features/NavBar/NavBar";
import Footer from "./components/Footer";
const client = new ApolloClient({
  link: authLink.concat(httpLink),

  cache: cache,
});
function App() {
  const isSearch = useReactiveVar(isSearchVar);
  return (
    <ApolloProvider client={client}>
      <div className="app d-flex flex-column min-vh-100 justify-content-between">
        <NavBar isSearch={isSearch}></NavBar>

        {/* <Route exact path="/opp/:id" component={Opp}></Route> */}
        <Route exact path="/">
          <Redirect to="/search"></Redirect>
        </Route>
        <Route path="/search" component={SearchRoute}></Route>
        <Route exact path="/error" component={ErrorAlert}></Route>
        <Footer></Footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
