const app = require("./src/server");
const { dbCon } = require("./src/config/dbCon");

dbCon().then(() => {
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
});
