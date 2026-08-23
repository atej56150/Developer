const UsersList2 = () => {

    const users = [
        {name:"Ram", city:"Tirupati", Age:"25", DATE:"01-01-2001"},
        {name:"Raju", city:"Vizag", Age:"26", DATE:"01-01-2000"},
        {name:"Ravi", city:"Hyderabad", Age:"27", DATE:"01-01-1999"},
        {name:"Rajesh", city:"Bangalore", Age:"28", DATE:"01-01-1998"},
    ];

    const calculateAge = (birthday) => {
        birthday = new Date(birthday);
        return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
    }

    const username = "Rama";
    const DOB = "07-25-1987"

    return <div>
        <h1>Users List - Functional Component</h1>

        <h3> He is MR.{username} aged about {calculateAge(DOB)} years ago</h3>

        {
            users.map((item, index) => (
                <h4 key={index}>
                    Mr.{item.name} age is {calculateAge(item.DATE)} years ago equal to {item.Age} ...
                </h4>
            ))
        }

        <table border="1" cellPadding={10}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>PinCode</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Ramana</td>
                    <td>Hyderabad</td>
                    <td>517502</td>
                </tr>
                {
                    users.map((item,index) => <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.city}</td>
                        <td>{item.Age}</td>
                    </tr>)
                }
            </tbody>
        </table>

    </div>
    
}

export { UsersList2 }
