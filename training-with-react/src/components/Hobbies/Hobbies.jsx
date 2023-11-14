import { useState, useEffect } from "react";
import { Table } from "antd";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    fetch("https://6551ad555c69a7790328feb7.mockapi.io/api/hobies", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setHobbies(data);
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
      <h2>Hobbies</h2>
      {hobbies && <Table dataSource={hobbies} columns={columns} />}
    </>
  );
};

export default Hobbies;
