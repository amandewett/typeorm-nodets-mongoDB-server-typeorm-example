import { Entity, Column } from "typeorm";
import { SharedEntity } from "./shared.entity";
import { Roles } from "../enums/enum";

@Entity({ name: "users" })
export class User extends SharedEntity {
    @Column({ unique: true })
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    password: string;

    @Column({ type: "string", default: Roles.User })
    role: string = Roles.User;
}
