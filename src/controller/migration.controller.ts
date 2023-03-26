import { Model } from "sequelize";
import { Post } from "../models/posts";
import { User } from "../models/user";
 
export default async function start() {
    let user = await User.create({
        username : "admin",
        email : "admin@gmail.com",
        password : "12345678",
        nickname : "admin",
        firstname : "chau",
        lastname : "nghi",
    });
    
    let post = await Post.create({
        title : "Post title example",
        slug : "home",
        description : "Mota",
        }
    );

    await post.$set("athor", user.id);
    testEager();
}


export async  function testEager() {
    let users  = await User.findAll({
        include :[
            Post
        ]
    });
}
