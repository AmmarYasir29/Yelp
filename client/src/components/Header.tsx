import React from "react";
const Header = () => {
  return (
    <div className="container mt-4">
      <div className="row mt">
        <div className="col">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Location" />
        </div>
        <div className="col">
          <select className="form-select">
            <option defaultValue="true" disabled>Price Range</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col">
          <input
            type="submit"
            className="form-control btn-primary"
            value="Add"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
