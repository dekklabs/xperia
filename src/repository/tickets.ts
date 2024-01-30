import { AppDataSource } from "../db/connections";
import { Tickets } from "../entities/Tickets";

export const ticketRepository = AppDataSource.getRepository(Tickets)
