import mongoose, { Document, Model } from "mongoose";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    age: number;
    gender: string;
}

const UserSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: [true, "Veuillez fournir un nom d'utilisateur"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Veuillez fournir une adresse e-mail"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Veuillez fournir un mot de passe"],
    },
    age: {
        type: Number,
        required: [true, "Veuillez fournir un âge"],
    },
    gender: {
        type: String,
        required: [true, "Veuillez fournir un genre"],
    },
});

const User: Model<IUser> =
    mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
