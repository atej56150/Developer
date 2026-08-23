const Subjects = () => {

    const backend = ["Python", "NodeJS", "PHP", "Java"];

    return <div>
        <h1> Subjects List</h1>

        <ul>
            <li> HTML </li>
            <li> CSS </li>
            <li> JavaScript </li>
            <li> ReactJS </li>
        </ul>

        <h3>{backend}</h3>

        <h4>{backend.join(", ")}</h4>

        <h2>The Length of Backend : {backend.length}</h2>

        <ul>
            <li>{backend[0]}</li>
            <li>{backend[2]}</li>
            <li>{backend[1]}</li>
            <li>{backend[3]}</li>
        </ul>

        <ul> {backend.map((items,index) => <li key={index}>{items}</li>)} </ul>

    </div>

}

export {Subjects}
