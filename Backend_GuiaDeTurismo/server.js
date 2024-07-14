const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const attractionsRouter = require("./routes/attractions");
const destinationsRouter = require("./routes/destinations");

// Middleware CORS
app.use(cors());

// Middleware para interpretar JSON
app.use(express.json());

app.use("/api/attractions", attractionsRouter);
app.use("/api/destinations", destinationsRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
