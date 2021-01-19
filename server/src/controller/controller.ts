import { okRes } from "../helper/tools";
const db = require("../db");
export default class controller {
  static async delRestaurants(req: any, res: any) {
    const { id } = req.params;
    let rows = await db.query("DELETE FROM restaurants WHERE id=$1;", [id]);
    okRes(res, rows);
  }
  static async editRestaurants(req: any, res: any) {
    const { id } = req.params;
    let body = req.body;
    const {
      rows,
    } = await db.query(
      "UPDATE restaurants SET name = $1, location = $2,price=$3 WHERE id=$4;",
      [body.name, body.location, body.price, id]
    );
    okRes(res, rows);
  }
  static async getRestaurants(req: any, res: any) {
    const { rows } = await db.query("SELECT * FROM restaurants");
    okRes(res, rows, 200);
  }

  static async Restaurant(req: any, res: any) {
    const { id } = req.params;
    const { rows } = await db.query("SELECT * FROM restaurants WHERE id = $1", [
      id,
    ]);
    okRes(res, rows, 200);
  }

  static async addRestaurants(req: any, res: any) {
    const body = req.body;
    const rows = await db.query(
      "insert into restaurants (name, location, price) values($1, $2, $3);",
      [body.name, body.location, body.price]
    );
    okRes(res, rows);
  }
}
