import covid from "../../assets/images/covidimage.png";
import React from "react";
import init from "../Camera/Camera.jsx";

function ReadyPage(props) {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center" alt="container">
      <div className="flex-1 flex flex-col justify-center items-center space-y-4" alt="container">
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg w-36 flex flex-col items-center space-y-2"
          alt="back button"
          onClick={props.toPrevPage}
        >
          <span className="text-center" alt="back text">Back</span>
        </button>
        <div className="bg-gray-700 w-48 h-48 rounded-lg flex flex-col justify-center items-center" alt="prep container">
          <img
            src={covid} // Replace with the actual path to your image
            alt="Image"
            className="w-28 h-28" // Adjust the width and height
          />
          <p className="text-gray-300 text-center mt-2" alt="prep text">
            Prepare your camera and click "Next" when ready to scan.
          </p>
        </div>
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-lg w-36 flex flex-col items-center space-y-2"
          alt="next button"
          onClick={props.toNextPage}
        >
          <span className="text-center" alt="next text">Next</span>
        </button>
      </div>
    </div>
  );
}

export default ReadyPage;
