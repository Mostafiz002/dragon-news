import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./QZone";
import { AuthContext } from "../../Provider/AuthProvider";
import { use } from "react";

const RightAside = () => {
  const { user } = use(AuthContext);
  return (
    <div className="space-y-8">
      {!user && <SocialLogin />}
      <FindUs />
      <QZone />
    </div>
  );
};

export default RightAside;
