export function verifyToken(token: string): boolean {
    // Implement your token verification logic here
    // This is a placeholder implementation
    return token === process.env.API_SECRET_KEY;
  }