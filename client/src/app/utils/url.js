export default () => {
    switch (process.env.NODE_ENV) {
        case "development":
            return "localhost:5000/";
        case "production":
            return "home28.xyz:5000/";
    }
};