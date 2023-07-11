import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from "../../DBtest/db";
import { IUser } from '../../models/user.models';


export const UserSchema = sequelize.define('IUser', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "USER"
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    freezeTableName: true // all tables will use the same name as the model name
})