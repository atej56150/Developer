function fetchUser2(id: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { id: id, name: "John Doe" };

      console.log(user);

      resolve(user);
    }, 2000);
  });
}

fetchUser2(2);

fetchUser2(3).then((user) => {
  console.log(user)
})