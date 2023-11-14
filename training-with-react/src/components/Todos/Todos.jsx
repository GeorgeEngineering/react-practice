import { useState, useEffect } from "react";
import { Table } from "antd";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://6551ad555c69a7790328feb7.mockapi.io/api/todos", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => console.log(`error: ${error}`));
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];

  return (
    <>
      <h2>Todos</h2>
      {todos && <Table dataSource={todos} columns={columns} />}
    </>
  );
};

export default Todos;
