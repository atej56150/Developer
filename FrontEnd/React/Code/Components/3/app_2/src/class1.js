import { Component } from "react";
import Welcome from './welcome'

class Sample extends Component
{

    username1 = "React_JS"

    render()
    {

        let x = 200;
        var username2 = "JavaScript"

        return <div>
            <h1>Class Component</h1>
            <h1>Learning an {this.username1}</h1>
            <h1>Learning an {username2}</h1>
            <p>file :- class1.js</p>
            <p> The value of x is :- {x} </p>
            <h2> The price will be { 10+20+30 } </h2>
            <h3>Date : {Date()}</h3>
            <h4>Date : {new Date().toString()}</h4>
            <h5>Date : {new Date().toLocaleTimeString()}</h5>
            <h6>{[10,20,30,40].join("#")}</h6>
            <p>{window.location.href}</p>
            <h7>{window.location.href}</h7>
            <hr></hr>
            <Welcome />
        </div>
    }
}

export default Sample;



// render() inside variable have to specify only the "{VARIABLE_NAME}"
// render() outside variable have to specify the "{this.VARIABLE_NAME}"
// username Variable is a class property, not a local Variable.
// Inside the render() method, username is not defined as a local variable (like let x = 200;).
