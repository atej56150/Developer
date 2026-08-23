const Welcome3 = () => <div>1...1...1</div>;
const Welcome4 = () => (
  <div>
    <div>2...2...2</div>
    <div>3...3...3</div>
  </div>
);

export { Welcome3 as default, Welcome4 };                                 // Welcome3 is DEFAULT, Welcome4 is NAMED



const Welcome5 = () => <div>4...4...4</div>;
const Welcome6 = () => (
  <div>
    <div>5...5...5</div>
    <div>6...6...6</div>
  </div>
);

export { Welcome5, Welcome6 };                                           // Now both are named exports
