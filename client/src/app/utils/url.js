let url = (() => {
    switch (process.env.NODE_ENV) {
        case "development":
            return "http://localhost:3000/";
        case "production":
            return "https//home28.xyz:3000/";
    }
})();

export default url;
export const loginUrl = `${url}login`;
export const isAuthenticatedUrl = `${url}isAuthenticated`;
