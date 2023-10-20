-- CreateTable
CREATE TABLE "post" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "post_id_key" ON "post"("id");
