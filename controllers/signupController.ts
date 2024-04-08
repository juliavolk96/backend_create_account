import { Request, Response } from "express";

// Request handler for creating an account
export const createAccount = (req: Request, res: Response) => {
  const { firstName, lastName, email, password, confirmPassword, dob } = req.body;

  // Check if all required fields are present
  if (!firstName || !lastName || !email || !password || !confirmPassword || !dob) {
    return res.status(400).json({ error: 'Please fill in all fields'});
  }

  // Check email format
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailFormat.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email' });
  }

  // Check password match
  if (password !== confirmPassword) {
    return res.status(400).json({ error: `Passwords do not match` });
  }

  // Check password complexity
  const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!passwordFormat.test(password)) {
    return res.status(400).json({ error: 'The password must contain at least 8 characters, including uppercase and lowercase letters, as well as numbers.' });
  }

  return res.status(200).json({ message: 'Account successfully created' });
}