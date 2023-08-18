import React from "react";
import "./styles.css";
export type ButtonPropTypes = {
  onClick?: (e) => void;
  text: string;
  type: "button" | "submit" | "reset";
};
const Button: React.FC<ButtonPropTypes> = ({ text, type, onClick }) => {
  return (
    <div className={`btn-container-${text}`}>
      {/* <Button className='Button'type={type} value={value} onChange={onChange}/> */}
      <button
        type={type}
        className={`button-${type}`}
        onClick={onClick}
        data-testid="button-test"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
