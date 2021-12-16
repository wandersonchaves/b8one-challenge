import express from "express";

const router = express.Router();

router.post("/users", async (req, res) => {});

router.get("/users", async (req, res) => {});

router.get("/users/:userID", async (req, res) => {});

router.put("/users/userID", async (req, res) => {});

router.delete("/users/userID", async (req, res) => {});

export { router };
