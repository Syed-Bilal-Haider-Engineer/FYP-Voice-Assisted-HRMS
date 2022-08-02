export const emailAPI =
process.env.NODE_ENV == "development"
    ? "https://bilalserver.herokuapp.com"
    : "https://bilalserver.herokuapp.com";

    

    export const ipaddress =
  process.env.NODE_ENV == "development"
    ? "http://localhost:8080"
    : "http://localhost:8080";
