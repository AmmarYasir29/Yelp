import express from "express";
import morgan from "morgan";
const app: any = express();
import { errRes } from "./helper/tools";
import v1 from "./router";

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use("/v1", v1);

app.use((req: Request, res: Response, next: any) => {
  return errRes(res, "404 Not found");
});
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
