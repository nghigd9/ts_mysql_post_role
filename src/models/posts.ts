import {Table, Model, Column, BelongsTo, ForeignKey, DataType} from "sequelize-typescript";
import { User } from "./user";
@Table({
    timestamps : true,
    tableName : "posts"
})
export class Post extends Model {
    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    title!:string;

    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    slug!:string;

    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    description!:string;

    @BelongsTo(() => User, 'userId')
    athor!: User
}