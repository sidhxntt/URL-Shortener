// server.js or your main server file
import express from "express";
import prisma from "../prisma/prisma.js";

const router = express.Router();
router.get("/favicon.ico", (req, res) => res.status(204).end());

router.get("/:shortId", async (req, res, next) => { 
  const { shortId } = req.params;

  try {
    const urlMapping = await prisma.urls.findUnique({
      where: {
        shortId
      },
    });

    if (urlMapping) {
      res.redirect(urlMapping.originalUrl);
    } else {
      res.status(404).json({ error: "Short URL not found" });
    }
  } catch (error) {
    next(error);
  }
});


export default router;
