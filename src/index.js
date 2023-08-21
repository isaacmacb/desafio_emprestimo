const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/customer-loans", (req, res) => {
  const { age, income, location } = req.body;
  const loans = [];

  if (income <= 3000) {
    loans.push({ type: "Personal", interest_rate: 4 });
    loans.push({ type: "Guaranteed", interest_rate: 3 });
  } else if (income > 3000 && income <= 5000 && age < 30 && location == "CE") {
    loans.push({ type: "Personal", interest_rate: 4 });
    loans.push({ type: "Guaranteed", interest_rate: 4 });
  } else if (income >= 5000) {
    loans.push({ type: "Consignment", interest_rate: 4 });
  }

  res.status(200).json({
    customer: req.body.name,
    loans: loans
  });
});

const port = 3000;
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
