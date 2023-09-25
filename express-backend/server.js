const app = require("./app");
const { sequelize } = require("./models/models");

const PORT = process.env.PORT || 5002;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start the server due to database error:", err);
  });
