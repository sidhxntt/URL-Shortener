-- CreateTable
CREATE TABLE "urls" (
    "id" SERIAL NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "shortId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "urls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "urls_originalUrl_key" ON "urls"("originalUrl");

-- CreateIndex
CREATE UNIQUE INDEX "urls_shortId_key" ON "urls"("shortId");
