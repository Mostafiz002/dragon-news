import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="mb-5">Find us on</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn  justify-start bg-base-100 join-item w-full">
           <FaFacebook/> Facebook
          </button>
          <button className="btn bg-base-100 join-item w-full justify-start"><FaTwitter/> Twitter</button>
          <button className="btn bg-base-100 join-item  justify-start w-full">
           <FaInstagram/> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
