import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'rehankhalil462@gmail.com',
    password: bcrypt.hashSync('Mus@@46294359', 10),
    isAdmin: true,
  },
  {
    name: 'Rehan Khalil',
    email: 'rehan@gmail.com',
    password: bcrypt.hashSync('rehan1234', 10),
  },
  {
    name: 'Majid Khalil',
    email: 'majid@gmail.com',
    password: bcrypt.hashSync('majid1234', 10),
  },
];
export default users;
