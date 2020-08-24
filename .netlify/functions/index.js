const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  errorFormat: "minimal",
});

exports.handler = async function (event, context) {
  // your server-side functionality
  const user = await prisma.user.findMany();
  return {
    statusCode: 200,
    body: JSON.stringify(user),
  };
};
