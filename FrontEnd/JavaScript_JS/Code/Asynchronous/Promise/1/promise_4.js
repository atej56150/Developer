function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("data"), 10000);
  });
}

fetchData().then(data => console.log(data)).catch(err => console.error(err));
