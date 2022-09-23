import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const newUser = await prisma.user.create({
        data: {
            email: "hello@herewecode.io",
            username: "gaelgthomas",
        },
    });

    console.log("New User:");
    console.log(newUser);

    const firstTweet = await prisma.tweet.create({
        data: {
            text: "Hello world!",
            userId: newUser.id,
        },
    });

    console.log("First tweet:");
    console.log(firstTweet);

    const newUserWithTweets = await prisma.user.findUnique({
        where: {
            email: "hello@herewecode.io",
        },
        include: { tweets: true },
    });

    console.log ("User object with Tweets:");
    console.dir(newUserWithTweets);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    })