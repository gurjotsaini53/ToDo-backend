import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
export const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onclick={updateMode} />
        <AiFillDelete className="icon" onclick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
