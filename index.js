import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);


app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on PORT ${process.env.PORT}`);
});