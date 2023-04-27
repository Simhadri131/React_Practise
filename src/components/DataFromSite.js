import React, { useState } from "react";

import axios from "axios";
import CardData from "../components/CardData";

const DataFromSite = () => {
  const [bundle, setBundle] = useState([]);

  const GetData = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );

      setBundle(response.data);
    } catch (err) {
      console.log("error while loading you data");
    }
  };
  console.log(bundle);

  return (
    <div className="w-full">
      <button
        className="bg-black rounded-lg px-6 py-2 m-4 text-white font-bold"
        onClick={GetData}
      >
        Get categories
      </button>
      <div className="grid grid-cols-4 gap-4 w-full">
        {bundle.map((each) => (
          <CardData data={each} key={each} />
        ))}
      </div>
    </div>
  );
};

export default DataFromSite;
