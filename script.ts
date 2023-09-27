import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const users = await prisma.user.findMany()
  console.log(users);
}

main()
  .catch(async (e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
