-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('girl', 'boy');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "extraDescription" TEXT,
    "material" TEXT NOT NULL,
    "picture" TEXT[],
    "article" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "oldPrice" INTEGER,
    "quantity" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "gender" "Gender"[],
    "season" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "size" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_article_key" ON "Product"("article");

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
