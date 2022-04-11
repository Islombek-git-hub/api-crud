import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const Page = () => {
  const [data, setData] = useState([]);
  let { username } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
          console.log(result);
        },

        (error) => {
          console.error(error);
        }
      );
  }, []);

  return (
    <div>
      {data.length > 0 && (
        <p>
          <b>USERNAME </b>
          {data[0].username}
          <br />
          <b>NAME </b>
          {data[0].name}
        </p>
      )}
    </div>
  );
};

export default Page;
