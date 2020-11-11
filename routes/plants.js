const { Router } = require("express");
const { getClient } = require("../mongo");

const router = Router();

router.get("/", async (req, res) => {
  const client = await getClient();
  const plants = await client.collection('plants').find({}).toArray();
  res.send({ message: plants });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const client = await getClient();
  const plants = await client.collection('plants').find({ plant_id: id }).toArray();
  res.send({ message: plants});
});

module.exports = router;