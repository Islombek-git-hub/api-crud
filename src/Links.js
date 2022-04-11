import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Circles } from "react-loader-spinner";
const Links = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setData(result);
        },

        (error) => {
          console.error(error);
        }
      );
  }, []);
  return (
    <ul>
      {data.length > 0 ? (
        data.map((a, i) => (
          <li key={i}>
            <Link to={`/${a.username}`}>{a.username}</Link>
          </li>
        ))
      ) : (
        <Circles color="#00BFFF" height={80} width={80} />
      )}
    </ul>
  );
};

export default Links;
