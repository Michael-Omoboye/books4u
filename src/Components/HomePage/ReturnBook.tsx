import React from "react";

export const ReturnBook = () => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img src={""} alt="book" width="151" height="233" />
        <h6 className="mt-2">Book</h6>
        <p>Books4U</p>
        <a href="#" className="btn main-color text-white">
          Reserve
        </a>
      </div>
    </div>
  );
};
