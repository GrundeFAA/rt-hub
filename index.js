const express = require("express");

const schedule = require("node-schedule");
const app = express();
const PORT = 3000;

const arrayOfJobs = [];

schedule.scheduleJob("* */1 * * * *", () => {
  const largeDataSet = {
    lots: "of data",
  };
  console.log("scheduled job running");
  const job = {
    time: new Date(),
    data: largeDataSet,
  };
  arrayOfJobs.push(job);
});

app.get("/jobs", (req, res) => {
  res.json(arrayOfJobs);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
