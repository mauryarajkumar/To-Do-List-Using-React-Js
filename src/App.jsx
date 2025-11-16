
import React, { useState } from "react";
import "./App.css";

export default function App() {
  let [todolist, settodolist] = useState([]);

  let saveTodolist = (event) => {
    event.preventDefault();
    let toname = event.target.toname.value;

    if (toname.trim() === "") {
      alert("Enter a valid todo");
      return;
    }

    if (!todolist.includes(toname)) {
      let finaldolist = [...todolist, toname];
      settodolist(finaldolist);
    } 
    else {
      alert("Todo already added");
    }

    event.target.toname.value = "";
  };

  let list = todolist.map((value, index) => {
    return (
      <Todolistitems
        value={value}
        key={index}
        indexnum={index}
        todolist={todolist}
        settodolist={settodolist}
      />
    );
  });

  return (
    <div className="app-container">
       <h5>To-Do-List</h5>
      <form onSubmit={saveTodolist}>
        <input type="text" name="toname" placeholder="Enter items" />
        <button>Add</button>
      </form>
      <div className="todo-card">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

function Todolistitems({ value, indexnum, todolist, settodolist }) {
  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    let finaldata = todolist.filter((v, i) => i !== indexnum);
    settodolist(finaldata);
  };

  let checkStatus = () => {
    setStatus(!status);
  };

  return (
    <li className={status ? "completetodolist" : ""}>
      <span className="index">{indexnum}</span>

      <span className="task-text" onClick={checkStatus}>
        {value}
      </span>

      <span className="delete-btn" onClick={deleteRow}>
        &times;
      </span>
    </li>
  );
}
