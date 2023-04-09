import React, { useState } from "react";
import TodoItem from "./item/TodoItem";

const data = [
  {
    _id: "qqq1",
    title: "Finish the eassy collaboration",
    isCompleted: false,
  },
  {
    _id: "qqq2",
    title: "Read the book",
    isCompleted: false,
  },
  {
    _id: "qqq3",
    title: "Send a message",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos]; //дублируем чтобы не мутировать
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => setTodos([...todos].filter((t) => t._id !== id));

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2x1 font-bold text-center mb-4">Todo for junior</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Home;
