import { useState, useEffect } from "react";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    fetch("https://6551ad555c69a7790328feb7.mockapi.io/api/hobies", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setHobbies(data);
        console.log(`data ${JSON.stringify(data)}`);
      })
      .catch((error) => console.log(`error: ${error}`));
  }, []);

  return (
    <>
      <h2>Hobbies</h2>
      {hobbies && <p>{123}</p>}
    </>
  );
};

export default Hobbies;