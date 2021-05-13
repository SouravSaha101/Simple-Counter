import "./button.css";
export const Button = (props) => {
  return (
    <button
      onClick={() =>
        props.sign === "Reset"
          ? props.updateCount(-props.count)
          : props.sign === "+"
          ? props.updateCount(1)
          : props.updateCount(-1)
      }
    >
      {props.sign}
    </button>
  );
};
