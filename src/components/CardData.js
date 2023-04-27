import axios from "axios";
import React, { useState } from "react";
import { Popover } from "@headlessui/react";

const CardData = ({ data }) => {
  const [data1, setData1] = useState("");
  const getDetails = async () => {
    const responseData2 = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${data}`
    );
    console.log(responseData2.data.categories, responseData2.data.value);
    setData1(responseData2.data.value);
  };

  console.log("CardData in this File", data);
  console.log("this blocked is called");
  return (
    <div className="grid rounded-2xl grid-flow-row w-full gap-2 relative">
      <Popover className="relative">
        <Popover.Button
          onClick={getDetails}
          className="bg-red-900 text-white font-bold font-serif w-full "
        >
          {data}
        </Popover.Button>

        <Popover.Panel className="absolute bg-blue-950 text-white z-10">
          <div className="">
            <h1>{data1}</h1>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default CardData;
