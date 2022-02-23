import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client'
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import 'isomorphic-fetch'

const HttpLink = createHttpLink({ uri: 'http://localhost:4000/' })

const authLink: any = setContext((_, { headers }) => {
    // leer el storage almacenado
    const token = localStorage.getItem('token')
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    }
})

const errorLink: any = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});


const cliente = new ApolloClient({
    cache: new InMemoryCache(),
    connectToDevTools: true,
    link: ApolloLink.from([
        errorLink,
        authLink.concat(HttpLink)
    ]),
    queryDeduplication: false
})

export default cliente