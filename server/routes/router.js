const Controller = require("../controllers");

const router = require("express").Router();

router.get("/", Controller.getAll);

router.post("/", Controller.create);

router.get("/:id", Controller.getOne);

router.put("/:id", Controller.checkout);

module.exports = router;
