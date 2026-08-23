import { Component } from "react";

class TestCls extends Component
{

    price = 8340;
    discount=55;

    render()
    {
        return <div>
            <h1>TestClass Component</h1>
            <h4>The price of the product is : {this.price} after applying the {this.discount}% discount, you have to pay {this.price - this.price * this.discount / 100}</h4>
        </div>
    }
}

export default TestCls
