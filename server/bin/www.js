const port = process.env.port || 3000;
const app = require("../app");

app.listen(port, () => {
  console.log(`app is listening on port http://localhost:${port}/`);
});
