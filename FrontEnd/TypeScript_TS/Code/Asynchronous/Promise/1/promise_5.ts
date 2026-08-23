// Promise with Objects

type User = {
  id: number;
  name: string;
};

function fetchUser(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: "John Doe",
      });
    }, 1000);
  });
}

fetchUser(1).then((user) => {
  console.log(user);
});

fetchUser(2).then((user) => {
  console.log(user.id);
});
