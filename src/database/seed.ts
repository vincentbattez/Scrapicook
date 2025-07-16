import { PrismaService } from "./prismaClient";

const prisma = new PrismaService();

async function main() {
  console.log("🤡 main()", prisma);

  // Exemple d'insertion de données de test
  console.log("Données de test insérées !");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
