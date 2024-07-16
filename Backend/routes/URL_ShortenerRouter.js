// server.js or your main server file
import express from "express";
import prisma from "../prisma/prisma.js";
import { generateShortId } from "../controllers/GenerateShortID.js";

const router = express.Router();
const port = process.env.PORT_NUMBER;

router.post("/", async (req, res, next) => {
  const { input } = req.body;

  try {
    // Check if the URL mapping exists based on the original URL
    let urlMapping = await prisma.urls.findUnique({
      where: {
        originalUrl: input,
      },
    });

    if (!urlMapping) {
      // Generate a new short ID and create the new URL mapping
      const shortId = generateShortId();
      urlMapping = await prisma.urls.create({
        data: {
          originalUrl: input,
          shortId,
        },
      });
    }

    // Create the short URL using the short ID
    const shortUrl = `http://localhost:${port}/${urlMapping.shortId}`;

    // Send the short URL in the response
    res.send({ URL: shortUrl });
  } catch (error) {
    next(error);
  }
});


export default router;
