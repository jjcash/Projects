import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindUserController {
    async handle(request: Request, response: Response) {
        const { user_id } = request.params;

        const user = await prismaClient.user.findFirst({
            where: {
                user_id,
            },
        });
        return response.json(user);
    }
}