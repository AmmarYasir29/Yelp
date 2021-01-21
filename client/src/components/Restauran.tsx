import React, { useEffect } from "react";
import useStore from "../storeState/Manage";
const Restauran = () => {
  const { restaurant, setRestaurant } = useStore();
  useEffect(() => {
    const warringHandel = async () => {
      return await fetch("http://localhost:3000/v1/restaurants")
        .then((result) => result.json())
        .then((res) => {
          setRestaurant(res.data);
        })
        .catch((err) => console.log(err));
    };
    warringHandel();
  }, []);

  return (
    <div className="container mt-4">
      <table className="table table-dark table-hover">
        <thead className="table-primary">
          <tr className="link-dark">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr className="pt-2">
            <th scope="row">KFC</th>
            <td>Baghdad</td>
            <td>$$$</td>
            <td>reviw</td>
            <td>
              <button type="button" className="btn btn-warning">
                Update
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr className="pt-2">
            <th scope="row">saje</th>
            <td>iraq</td>
            <td>$$</td>
            <td>reviw</td>
            <td>
              <button type="button" className="btn btn-warning">
                Update
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Restauran;
