import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import axios from "axios";
const Links = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
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
        <Triangle color="#555" height={80} width={80} />
      )}
    </ul>
  );
};

export default Links;
