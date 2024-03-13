const appConfig = {
    // app title
    name: "NEXT Smart Chain Explorer",
    // app description
    description:
        "NEXT Smart Chain Explorer allows you to explore and search the NEXT Smart Chain blockchain for transactions, addresses and blocks",
    // app keywords
    keywords: "next, explorer, search, blockchain, crypto, currency",
    // apollo client settings
    apollo: {
        // list of providers. if one of them is unavailable, another is randomly picked
        providers: [
            {
                http: 'https://xapi.nextsmartchain.com/',
                // for subscriptions
                ws: '',
            }
        ],
        // index into providers array of default provider or 'random' - takes index randomly
        defaultProviderIndex: "random"
    },
    //
    useTestnet: false,
    // use 'hash' mode in vue router
    routerHashMode: true,
    // testnet config
    testnet: {
        // list of providers. if one of them is unavailable, another is randomly picked
        providers: [
            {
                http: 'https://xapi-testnet.nextsmartchain.com/api',
                // for subscriptions
                ws: '',
            },
        ],
    },
    // progressive web application
    usePWA: true,
    // pwa settings
    pwa: {
        // name used in pwa manifest
        name: "NEXT Explorer"
    },
    // default options for production build
    build: {
        // output dir for production build
        outputDir: "dist"
    },
    // downtime threshold in seconds. downtime values less than this threshold will be displayed as 0
    downtimeThreshold: 10,
    // Feature Flags
    flags: {
        networkNodesMap: true,
    },
};

if (appConfig.useTestnet) {
    appConfig.apollo.providers = appConfig.testnet.providers;
}

// scss variables prepended to every scss file
appConfig.scssData = `
    @import "src/assets/scss/vars";
`;

module.exports = appConfig;
