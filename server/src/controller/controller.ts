import { okRes } from "../helper/tools";
const db = require("../db");
export default class controller {
  static async getReview(req: any, res: any) {
    const { id } = req.params;
    try {
      const rows = await db.query(
        `select * from reviews where restaurant_id=$1;`,
        [id]
      );
      okRes(res, rows);
    } catch (error) {
      console.log(error);
    }
  }
  static async addReview(req: any, res: any) {
    let body = req.body;
    const { id } = req.params;

    try {
      const rows = await db.query(
        "insert into reviews (restaurant_id,email, name, review,address,rating) values($1, $2, $3,$4,$5,$6);",
        [id, body.email, body.name, body.review, body.address, body.rating]
      );
      okRes(res, rows);
    } catch (error) {
      console.log(error);
    }
  }
  static async delRestaurants(req: any, res: any) {
    const { id } = req.params;
    try {
      let rows = await db.query("DELETE FROM restaurants WHERE id=$1;", [id]);
      okRes(res, rows);
    } catch (error) {
      console.log(error);
    }
  }
  static async editRestaurants(req: any, res: any) {
    const { id } = req.params;
    let body = req.body;
    try {
      const {
        rows,
      } = await db.query(
        "UPDATE restaurants SET name = $1, location = $2,price=$3 WHERE id=$4;",
        [body.name, body.location, body.price, id]
      );
      okRes(res, rows);
    } catch (error) {
      console.log(error);
    }
  }
  static async getRestaurants(req: any, res: any) {
    try {
      // const { rows } = await db.query("SELECT * FROM restaurants");
      const { rows } = await db.query(
        "select * from restaurants left join (select restaurant_id, count(*),trunc(avg(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;"
      );

      okRes(res, rows, 200);
    } catch (error) {
      console.log(error);
    }
  }
  static async Restaurant(req: any, res: any) {
    const { id } = req.params;
    try {
      const { rows } = await db.query(
        "SELECT * FROM restaurants WHERE id = $1",
        [id]
      );
      okRes(res, rows, 200);
    } catch (error) {
      console.log(error);
    }
  }
  static async addRestaurants(req: any, res: any) {
    const body = req.body;
    try {
      const rows = await db.query(
        "insert into restaurants (name, location, price) values($1, $2, $3);",
        [body.name, body.location, body.price]
      );
      okRes(res, rows);
    } catch (error) {
      console.log(error);
    }
  }
}
