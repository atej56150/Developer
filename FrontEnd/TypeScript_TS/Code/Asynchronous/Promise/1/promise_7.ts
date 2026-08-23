function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("data"), 1000);
  });
}

fetchData().then(data => console.log(data)).catch(err => console.error(err));