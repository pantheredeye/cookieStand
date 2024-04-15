-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT,
    "stripeId" TEXT,
    "role" TEXT,
    "hashedPassword" TEXT NOT NULL DEFAULT '',
    "salt" TEXT NOT NULL DEFAULT '',
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME
);
INSERT INTO "new_User" ("address", "email", "hashedPassword", "id", "name", "resetToken", "resetTokenExpiresAt", "role", "salt", "stripeId") SELECT "address", "email", "hashedPassword", "id", "name", "resetToken", "resetTokenExpiresAt", "role", "salt", "stripeId" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
