import { ApolloClient, InMemoryCache } from '@apollo/client'
import 'isomorphic-fetch'

const cliente = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/'
    // link: new HttpLink({
    //     uri: 'http://localhost:4000/',
    //     fetch
    // })
})

export default cliente