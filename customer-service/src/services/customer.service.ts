import { pool } from "../database/db";

export const createCustomer = async (name: string, email: string, phone: string) => {
  const result = await pool.query(
    "INSERT INTO customers(name,email,phone) VALUES($1,$2,$3) RETURNING *",
    [name, email, phone]
  );

  return result.rows[0];
};

export const getCustomers = async () => {
  const result = await pool.query("SELECT * FROM customers");
  return result.rows;
};