import React from "react";
import "../style.css";

const InputTodos = (props) => {
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };

  const { todoText, onChangeTodoText, onClickAdd, disabled } = props;
  return (
    <div style={style} className="input-area">
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
        disabled={disabled}
      />
      <button name="add" onClick={onClickAdd} disabled={disabled}>
        追加
      </button>
    </div>
  );
};

export default InputTodos;
