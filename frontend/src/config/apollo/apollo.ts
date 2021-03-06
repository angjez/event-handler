import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const link = createUploadLink({
  uri: `${process.env.REACT_APP_API_URL}`,
}) as any;

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
