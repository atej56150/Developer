function Welcome7() 
{

    let firstname = "Ram";
    let lastname = "Babburi"

    return <div className="container">
        <h1>This is React Functional Component</h1>
        <p>Functional Component</p>
        <label htmlFor="uname">User_Name :- </label>
        <input type="submit" /> 
        <p>Date: {new Date().toLocaleString()}</p>
        <h2> Welcome to firstname </h2>
        <h3> Welcome to {firstname} </h3>
        <h4>Welcome to {firstname + " " + lastname}</h4>
        <h5> Welcome to {firstname.toUpperCase()} {lastname.toLowerCase()} </h5>
    </div>   
    
}

export default Welcome7
