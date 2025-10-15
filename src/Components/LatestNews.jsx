import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../public/news.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="flex gap-5 items-center bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-6" pauseOnHover={true} speed={60}>
        {data.map((d, i) => (
          <p key={i} className="font-medium mx-3">
            {d.title}
          </p>
        ))}
        {/* <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores{" "}
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores{" "}
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores{" "}
        </p> */}
      </Marquee>
    </div>
  );
};

export default LatestNews;
