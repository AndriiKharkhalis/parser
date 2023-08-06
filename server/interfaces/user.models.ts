import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../DBtest/db';

class User extends Model {
    public id!: string;
    public name!: string;
    public password!: string;
    public email!: string;
    public role!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'USER',
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        modelName: 'User',
        freezeTableName: true,
    }
);

export default User;