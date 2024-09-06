import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma"; // Adjust the path as necessary

export async function GET(
  req: NextRequest,
  { params }: { params: { shortId: string } }
) {
  const { shortId } = params;

  try {
    const urlMapping = await prisma.urls.findUnique({
      where: {
        shortId,
      },
    });

    if (urlMapping) {
      // Redirect to the original URL
      return NextResponse.redirect(urlMapping.originalUrl);
    } else {
      return NextResponse.json(
        { error: "Short URL not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
