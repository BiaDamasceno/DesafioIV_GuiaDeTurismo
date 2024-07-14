const express = require("express");
const router = express.Router();
const pool = require("../db/connection");

// Rota para obter todas as atrações ou filtrar por destination_id
router.get("/", async (req, res) => {
  const destinationId = req.query.destination_id;
  let query = "SELECT * FROM destinations";
  const params = [];

  if (destinationId) {
    query += " WHERE destination_id = ?";
    params.push(destinationId);
  }

  try {
    const [rows] = await pool.query(query, params);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
