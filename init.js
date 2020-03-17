import "@babel/polyfill";
import "./db";
import app from "./app";
import dotenv from "dotenv";
// 위의 함수 import dotenv from "dotenv";로 .env 안의 정보들을 불러올 수 있다.
// .env 안의 정보를 표현하는 형식은 process.env."key"와 같다.
dotenv.config();
import "./models/Comics";
import "./models/Illuste";
import "./models/Sketch";
import "./models/Notice";
import "./models/Back";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT;

const openingAddress = () => {
  console.log(`SuperSide has opened on port ${PORT}`);
};

app.listen(PORT, openingAddress);
