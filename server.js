const app = require("./app");

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running. Use our API on port: 5000");
});
