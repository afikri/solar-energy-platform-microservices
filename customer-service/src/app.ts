import express from "express";
import { addCustomer, listCustomers } from "./controllers/customer.controller";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ service: "customer-service", status: "ok" });
});

app.post("/customers", addCustomer);
app.get("/customers", listCustomers);

app.listen(3001, () => {
  console.log("Customer service running on port 3001");
});