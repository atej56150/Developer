function Button({ text, type }) {
  return (
    <button type={type}>
      {text}
    </button>
  );
}

export default Button;

// left type: HTML attribute
// right {type}: JavaScript variable/prop
