const proxy = require("http-proxy-middleware");

module.exports = app => {
    app.use(proxy("/api/*", { target: "https://unilive-backend.herokuapp.com" }));
    app.use(proxy("/api/*", { target: "https://unilive.herokuapp.com" }));
  };
