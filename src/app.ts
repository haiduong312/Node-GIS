import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api";

const app = express();
const PORT = 8080;

app.use(cors());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

apiRoutes(app);

app.use((req, res) => {
  res.send("404 not found");
});

app.listen(PORT, () => {});
