import {Table, Model, HasMany, Column, DataType} from "sequelize-typescript"
import {Post} from "./posts";

@Table({
    timestamps : true,
    tableName : "users"
})
export class User extends Model {
    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    username!:string;

    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    email!:string;

    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    password!:string;

    @Column({
        type : DataType.STRING,
    })
    nickname!:string;


    @Column({
        type : DataType.STRING,
    })
    firstname!:string;

    @Column({
        type : DataType.STRING,
    })
    lastname!:string;

    @HasMany(() => Post, 'userId')
    posts!: Post[];
}