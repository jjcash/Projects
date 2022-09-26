import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { user_id, password, email, birth } = request.body;

        const user = await prismaClient.user.create({
            data: {
                user_id,
                password,
                email,
                birth,
            },
        })

        return response.json(user);
    }
}