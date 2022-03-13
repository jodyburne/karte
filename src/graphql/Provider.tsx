import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://stuart-frontend-challenge.vercel.app/graphql",
  cache: new InMemoryCache(),
});

export const Provider: React.FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
