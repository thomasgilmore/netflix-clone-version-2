import React from "react";
import "./loading.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="loadingDiv">
      <AiOutlineLoading3Quarters
        className="lineLoading"
        size={250}
        color="red"
      />
      <AiOutlineLoading3Quarters
        className="lineLoadingNotMoving"
        size={250}
        color="red"
      />
    </div>
  );
}
