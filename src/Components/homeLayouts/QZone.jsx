import React from "react";
import classImg from "../../assets/class.png";
import swimming from "../../assets/swimming.png";
import play from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="mb-5">QZone</h2>
      <div className="flex flex-col gap-3">
        <img src={swimming} alt="" />
        <img src={classImg} alt="" />
        <img src={play} alt="" />
      </div>
    </div>
  );
};

export default QZone;
