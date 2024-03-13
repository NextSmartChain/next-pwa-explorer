import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import VueApollo from 'vue-apollo';
import appConfig from '../../../app.config.js';
import { FApolloClient } from './FApolloClient.js';

export const nextFApolloClient = new FApolloClient({
    apolloProviders: appConfig.apollo.providers,
    defaultProviderIndex: appConfig.apollo.defaultProviderIndex,
});

export const testFApolloClient = new FApolloClient({
    apolloProviders: [{http: 'https://xapi.nextsmartchain.com/api'}],
    defaultProviderIndex: appConfig.apollo.defaultProviderIndex,
});


export const nextApolloClient = new ApolloClient({
    link: ApolloLink.from([
        nextFApolloClient.getNetErrorLink(),
        nextFApolloClient.getRetryLink(),
        nextFApolloClient.getErrorLink(),
        nextFApolloClient.getHttpLink(),
    ]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

export const testApolloClient = new ApolloClient({
    link: ApolloLink.from([
        testFApolloClient.getNetErrorLink(),
        testFApolloClient.getRetryLink(),
        testFApolloClient.getErrorLink(),
        testFApolloClient.getHttpLink(),
    ]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
});


Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
    clients: {
        next: nextApolloClient,
        test: testApolloClient,
    },
    defaultClient: nextApolloClient,
    defaultOptions: {
        $query: {
            fetchPolicy: 'network-only', // 'cache-and-network', 'network-only', 'cache-first'
        },
    },
});