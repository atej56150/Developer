function fetchUser4(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: "John Doe" });
    }, 2000);
  });
}

fetchUser4(4).then((user4) => {
  console.log(user4, user4.name);
});
