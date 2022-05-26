import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import Access from "./pages/Access";
import Footer from "./component/Footer";

import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./utils/GlobalState";

const httpLink = createHttpLink({
  uri: "graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home />} /> 
              <Route exact path="/documentation" element={<Documentation />} /> 
              <Route exact path="/access" element={<Access />} /> 
            </Routes>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
