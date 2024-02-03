import { AppDataSource } from "../db/connections";
import { Comments } from "../entities/Comments";

export const commentsRepository = AppDataSource.getRepository(Comments)
