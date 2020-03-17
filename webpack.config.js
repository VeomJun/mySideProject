const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCss = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    // 여기서 의미하는 모듈이란, 우리의 경우에는 style.scss 파일을 의미함.
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: ExtractCss.extract([
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            // 변환된 css 파일을 각각의 브라우저에 알맞게 호환시켜줌.
            options: {
              plugin() {
                return [autoprefixer({ browsers: "covers 99.5%" })];
              }
            }
          },
          {
            loader: "sass-loader"
            // scss 또는 sass를 일반 css로 변화시켜 줌.
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new ExtractCss("styles.css")]
};

module.exports = config;
