import {useState} from "react";

export default function Posts(){

   let [posts, setPosts] = useState([]);

   fetch("https://jsonplaceholder.typicode.com/posts")
       .then(value => value.json())
       .then(value => {
           setPosts(value) /* наповнили ячейку постами */
       });


    return(

        <div>
            {
                posts.map(post =><div>{post.id} - {post.title}</div> )
            }
        </div>
    );
}

