import { useState, useEffect } from "react";
import { Table } from "antd";

const Holidays = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetch("https://6551ad555c69a7790328feb7.mockapi.io/api/holidays", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setHolidays(data);
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
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <>
      <h2>Holidays</h2>
      {holidays && <Table dataSource={holidays} columns={columns} />}
    </>
  );
};

export default Holidays;