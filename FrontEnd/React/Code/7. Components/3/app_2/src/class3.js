import { Component } from "react";

class SubjectsCls extends Component {

    backend = ["Python", "NodeJS", "GoLang", "PHP", "Java", "Ruby"];

    render()
    {
        return <div>
            <h1>Sujects List in Class Component</h1>

            <h4> The Length of BackEnd : {this.backend.length} </h4>

            <ul> 
                {
                    this.backend.map((items,index) => <li key={index}>{items}</li>)
            
                } 
            </ul>

        </div>
    }
}

export { SubjectsCls }
