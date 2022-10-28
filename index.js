const express = require("express");
const schedule = require("node-schedule");
const app = express();
const PORT = 3000;

const arrayOfJobs = [
  {
    time: new Date().toLocaleString("en-GB"),
    data: (largeDataSet = {
      lots: "of data",
    }),
  },
];

schedule.scheduleJob("*/30 * * * * *", () => {
  const largeDataSet = {
    lots: "of data",
  };
  console.log("scheduled job running");
  const job = {
    time: new Date().toLocaleString("en-GB"),
    data: largeDataSet,
  };
  arrayOfJobs.push(job);
});

app.get("/jobs", (req, res) => {
  res.json({ lengthOfArray: arrayOfJobs.length, data: arrayOfJobs });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
