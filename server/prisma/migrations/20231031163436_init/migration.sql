/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Product";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "tag" TEXT NOT NULL DEFAULT 'Verduras',
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
