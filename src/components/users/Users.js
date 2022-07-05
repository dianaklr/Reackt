import {useEffect, useState} from "react";
import {User} from "../index";
// import Post from "../post/Post";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    }, []);

    const choseUser = (item) => {
        console.log('you see the result in the browser')
        setUser(item);
    };


    return (<div>
        {user.id &&

            <div style={{color: "gray"}}>
                <p>id: {user.id}</p>
                <h3>name: {user.name}</h3>
                <h4>username: {user.username}</h4>

            </div>}
        <h2>Users list</h2>
        {users.map((user, index) => <User
            key={index}
            item={user}
            choseUser={choseUser}
        />)}
    </div>);
}