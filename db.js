import mongoose from "mongoose";
// mongoose는 mongodbd와 javascript를 연결 시켜주는 중간 어뎁터로서의 역할을 하고 있음.
import dotenv from "dotenv";
dotenv.config();
// 위를 통해 .env 파일에 입력해 놓은 값을 아래처럼 바로 가져올 수 있다. (보안상의 문제)
// 이런 식으로 env를 사용하여 중요한 키 값들을 감추어 놓을 수 있다.

mongoose.connect(
  process.env.MONGO_URL_PROD, 
  {
  // 해당 mongodb에 부여된 저장소의 url은 27017로, localhost:27017을 부여해 줌. 이름은 humor.(로컬 db)
  // MONG_URL_PROD는 몽고 랩상에 업로드하는 url주소
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;
// mongodb의 사용을 할 수 있도록 만들어 놓음

const handleOpen = () => console.log("Data base has just opened!");
const handleError = error => console.log(`Error on DB Connection: ${error}`);

db.once("open", handleOpen);
// db를 open 시켜서 js가 db를 사용할 수 있도록 해 줌.
db.on("error", handleError);
// db 사용에 오류가 발생했을 시에는 오류 문구가 떠오름.
