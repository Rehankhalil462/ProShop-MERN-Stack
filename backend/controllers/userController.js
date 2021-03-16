import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateJsonWebToken from '../utils/generateWebTokens.js';

//@desc  Auth User & get token
//@route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (email === '' && password === '') {
    res.status(401);
    throw new Error('Please enter Email and Password');
  } else {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401);
      throw new Error('User with this Email does not exist.');
    } else {
      if (user) {
        if (password === '') {
          res.status(401);
          throw new Error('Please Enter Password.');
        } else {
          if (await user.matchPassword(password)) {
            res.json({
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
              token: generateJsonWebToken(user._id),
            });
          } else {
            res.status(401);
            throw new Error('Password is Incorrect.');
          }
        }
      } else {
        res.status(401);
        throw new Error('Invalid Email or Password');
      }
    }
  }

  // res.send({ email, password });
});

//@desc  Get user profile
//@route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User Not Found!');
  }
});

//@desc  Register a new user
//@route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User with this email already Exists.');
  }

  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateJsonWebToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});

export { authUser, getUserProfile, registerUser };
