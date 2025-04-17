import React, { useEffect, useState } from "react";

export const loader = async () => {
  return "something";
};

const Landing = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await loader();
      setData(result);
    };

    fetchData();
  }, []);

  return <h1>Landing: {data}</h1>;
};

export default Landing;
