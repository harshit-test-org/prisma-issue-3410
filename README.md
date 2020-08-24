## Introduction

Reproduction for https://github.com/prisma/prisma/issues/3410

## Steps

1. Clone this repo and run `npm install`
2. Replace credentials in `prisma/.env` and point it to an EMPTY DATABASE(IMPORTANT)
3. Do not run any migrations, we want the database to be empty in order to throw the error
4. Run `npx netlify dev`
5. Goto `http://localhost:8888/.netlify/functions/index`
6. See your terminal
