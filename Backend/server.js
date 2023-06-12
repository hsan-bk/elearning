const express=require("express");
const cors= require("cors");
const app=express();
const db_connect=require("./config/db_connect");
require("dotenv").config({path: "./config/.env"});
app.use(cors());
app.use(express.json());
app.use("/user",require("./routes/UserRoutes"));
app.use("/course",require("./routes/Course/CourseRoutes"));

app.use("/tag",require("./routes/Course/Require/Tag"));
app.use("/review",require("./routes/Course/Require/Review"));

app.use("/lesson",require("./routes/Course/Require/Lesson/Lesson"));
app.use("/passedlesson",require("./routes/Course/Require/Lesson/PassedLesson"));

app.use("/quiz",require("./routes/Course/Require/Quiz/Quiz"));
app.use("/passedquiz",require("./routes/Course/Require/Quiz/PassedQuiz"));

db_connect();
const PORT= process.env.PORT;
app.listen(PORT,(err)=>err?console.log(err):console.log(`server is running on ${PORT}`));