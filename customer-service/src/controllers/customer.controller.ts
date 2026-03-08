import { Request, Response } from "express";
import { createCustomer, getCustomers } from "../services/customer.service";

export const addCustomer = async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;

  const customer = await createCustomer(name, email, phone);
  res.json(customer);
};

export const listCustomers = async (req: Request, res: Response) => {
  const customers = await getCustomers();
  res.json(customers);
};