import {Router} from 'express';
import userRegisterDTO from '#Dto/user.register.dto.js';
import userLoginDTO from '#Dto/user.login.dto .js';
import userUpdateDataDTO from '#Dto/user.update-data.dto .js';
import userUpdateEmailDTO from '#Dto/user.update-email.dto.js';
import userUpdatePasswordDTO from '#Dto/user.update-password.dto.js';

const userRouter = Router();

userRouter.post('/register', userRegisterDTO, (req, res) => {res.send()})
userRouter.post('/login', userLoginDTO, (req, res) => {res.send()})
userRouter.get('/profile')
userRouter.patch('/update-data', userUpdateDataDTO, (req, res) => {res.send()})
userRouter.patch('/update-email', userUpdateEmailDTO, (req, res) => {res.send()})
userRouter.patch('/update-password', userUpdatePasswordDTO, (req, res) => {res.send()})
userRouter.delete('/unregister')

export default userRouter