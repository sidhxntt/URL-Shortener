import prisma from '../../../../prisma/prisma'; // Adjust the path as necessary
import { generateShortId } from '../../../controllers/GenerateShortID'; // Adjust the path as necessary
import { NextRequest, NextResponse } from 'next/server';

const SHORT_URL = process.env.SHORT_URL 

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "check complete" });
}
export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json();

    if (!input) {
      return NextResponse.json({ error: "Input URL is required" }, { status: 400 });
    }

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
    const shortUrl = `${SHORT_URL}/${urlMapping.shortId}`;

    // Send the short URL in the response
    return NextResponse.json({ URL: shortUrl }, { status: 200 });
  } catch (error) {
    console.error("Error occurred while shortening URL:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
