interface KeyValuePair0 <K, V> {
    key: K;
    value: V;
}

let StringNumber0: KeyValuePair0<string, number> = {
    key: "age",
    value: 22
}

console.log(StringNumber0.value)
