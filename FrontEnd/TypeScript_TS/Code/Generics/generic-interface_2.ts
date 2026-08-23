interface KeyValuePair0 <K, V> {
    key: {
       name: string,
       myKey: K 
    };
    value: V;
}

let StringNumber0: KeyValuePair0<boolean, number> = {
    key: {
        name: "STRING",
        myKey: false
    },
    value: 22
}

console.log(StringNumber0.value)
