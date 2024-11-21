const express = require("express");

// const router = express.Router();
const router = express.Router({ mergeParams: true });

const { createTodo,getTodo,getSingleTodo ,updateTodo,deleteTodo} = require("../controller/Todo");

router.route("/").post(createTodo).get(getTodo)

router.route("/:id").get(getSingleTodo).put(updateTodo).delete(deleteTodo)
module.exports = router;
