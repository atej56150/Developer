function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello TypeScript");
    }, 1000);
  });
}

getMessage().then((message) => {
  console.log(message);
});