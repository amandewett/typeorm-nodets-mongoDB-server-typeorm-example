import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource: DataSource = new DataSource({
    type: "mongodb",
    url: process.env.MONGO_CONNECTION_STRING,
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: ["src/entity/**/*.{ts,js}"]
});
