import { Component } from "react";

class UsersList1 extends Component{

    users = [
        {name:"Ram", city:"Tirupati", Age:"25"},
        {name:"Raju", city:"Vizag", Age:"26"},
        {name:"Ravi", city:"Hyderabad", Age:"27"},
        {name:"Rajesh", city:"Bangalore", Age:"28"},
    ];

    welcome(){
        return "Hello World...ReactJS";
    }

    calculatePrice = (price, discount) => {
        return price - price * discount / 100;
    }


    render()
    {

        console.log(this.users)

        return <div>
            <h1>Users List - Class Component</h1>

            <h4>{this.welcome()}</h4>

            <p>So you have to pay <b> {this.calculatePrice(3000, 20)} </b> Amount</p>

            <p>{this.users[2].name + " " + this.users[2].city}</p>
            <p><b> {this.users[0].name + " " + this.users[3].city} </b></p>

            {
                this.users.map((item,index) => <p>{item.name + " " + item.Age}</p>)
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
                        this.users.map((item,index) => <tr>
                            <td>{index+1}</td>
                            <td>{item.name+" "+item.Age}</td>
                            <td>{item.city}</td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    }
}

export {UsersList1}
