import {useState, useEffect} from "react"
import Post from "../post/Post"

export default function Posts(){
    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value =>
            setPosts(value)
            )

    }, [])

    return(
        <div>
            <h2>LIST</h2>
            {
                posts.map(post=><Post item={post}/>)
            }
        </div>
    )
}

