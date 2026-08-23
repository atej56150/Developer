import './users1.css'

const Users = () =>{

    const user = {name:"Ram", city:"Tirupati", Age:"25"};

    const users = ["Ram","Ravi","Raj"]

    return <div id="users">
        <h1>Welcome to Users World</h1>
        <h3> Users: {users.join(", ")}</h3>
        <h4> Welcome to {user.name+" "+user.Age} from {user.city} </h4>
    </div>

}

export default Users;
