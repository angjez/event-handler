import { ApolloProvider } from "@apollo/client";
import GlobalStyle from "@src/common/styles/global";
import client from "@src/config/apollo";
import App from "@src/modules/App";
import React, { FunctionComponent } from "react";

const Root: FunctionComponent = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>
);

export default Root;
