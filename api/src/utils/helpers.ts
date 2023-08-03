/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';
import { raw } from 'express';

export async function hashPassword(rawPassword: string) {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(rawPassword, salt);
}

// function for comparing passwords to hashed password

export async function compareHash(rawPassword: string, hashedPassword: string) {
  return bcrypt.compare(rawPassword, hashedPassword);
}
