const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/api", userRoutes);


let Port = 3000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
