const Test = () => {

    let price = 2430;
    let discount=25;

    return <div>
        <h1>Test Component</h1>
        <h4>The price of the product is : {price} after applying the {discount}% discount, you have to pay {price - price * discount / 100}</h4>
    </div>

}

export default Test;
