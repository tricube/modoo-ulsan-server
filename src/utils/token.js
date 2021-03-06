import jwt from 'jsonwebtoken';

import { env } from '@config';

const { signature, expiration } = env.token;

export function generateToken(member) {
  const { id, displayName, profileImage } = member;
  const payload = { id, displayName, profileImage };

  return jwt.sign(payload, signature, { expiresIn: expiration });
}

export function decodeToken(token) {
  return jwt.verify(token, signature);
}
