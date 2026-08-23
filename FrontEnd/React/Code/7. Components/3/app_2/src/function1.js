function Welcome1() 
{
    return <div>one.....1</div>    
}
export default Welcome1;                                        // Default export (only one per file)


function Welcome2()
{
    return <div>
        <div>ONE</div>
        <div>TWO</div>
    </div>
}
export { Welcome2 };


function Welcome3()
{
    return (<div>
        <h1>Welcome to React.JS</h1>
    </div>)
}


function Welcome4()
{
    return (<div>
        <p>Welcome to React.js</p>
    </div>)
}



export {Welcome3, Welcome4}
