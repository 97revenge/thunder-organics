/*
  Warnings:

  - You are about to drop the `LegacyProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `br` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `free` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `offer` on the `Product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "LegacyProduct";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "tag" TEXT NOT NULL DEFAULT 'Verduras',
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Product" ("description", "id", "image", "name", "price", "tag") SELECT "description", "id", "image", "name", "price", "tag" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
