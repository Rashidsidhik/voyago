import User from "../models/userModel";
import {
  TourConfirmationInterface,
  UserRegisterInterface,
} from "../../../../types/user";
import TourPackage from "../models/tourPackageModel";
import TourConfirm from "../models/tourConfirmDetails";
import { Types } from "mongoose";

export const userRepositoryMongoDB = () => {
  const addUser = async (user: UserRegisterInterface) => {
    return await User.create(user);
  };
  const getUserByEmail = async (email: string) => {
    return User.findOne({ email });
  };

  const checkUserBlock = async (email: string) => {
    return User.findOne({ email: email, isActive: true });
  };

  const getAllTourPackage = async () => {
    return TourPackage.find({});
  };

  const bookPackage = async (bookingDetails: TourConfirmationInterface) => {
    return await TourConfirm.create(bookingDetails);
  };

  const getPackage = async (packageId: string) => {
    const id = new Types.ObjectId(packageId);
    return await TourPackage.findOne({ _id: id });
  };

  const getUserDetails = async (userId: string) => {
    const id = new Types.ObjectId(userId);
    return await User.find({ _id: id });
  };

  return {
    addUser,
    getUserByEmail,
    getAllTourPackage,
    bookPackage,
    getPackage,
    checkUserBlock,
    getUserDetails,
  };
};

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;
