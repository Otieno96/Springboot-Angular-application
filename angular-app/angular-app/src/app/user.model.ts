import { Date } from "mongoose";

export class User {
    id!: number;
    firstname!: string;
    middlename!: string;
    lastname!: string;
    username!: string;
    gender!: string;
    DOB!: Date;
    email!: string;
    mobile!: string;
    password!: string;
}
