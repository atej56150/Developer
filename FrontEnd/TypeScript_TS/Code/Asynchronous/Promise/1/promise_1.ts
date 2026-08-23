function fetchUser1(id: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: "John Doe" });
    }, 2000);
  });
}

fetchUser1(1).then((user1) => {
  console.log(user1);
});