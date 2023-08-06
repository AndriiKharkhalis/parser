// import { DataTypes, Model, Optional } from 'sequelize';
// import { sequelize } from "../../DBtest/db";
// import { IUser } from '../../interfaces/user.models';


// export const UserSchema = sequelize.define('IUser', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: DataTypes.STRING,
//     password: DataTypes.STRING,
//     email: {
//         type: DataTypes.STRING,
//         unique: true,
//         allowNull: false
//     },
//     role: {
//         type: DataTypes.STRING,
//         defaultValue: "USER"
//     },
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE,
// }, {
//     freezeTableName: true // all tables will use the same name as the model name
// // })

// коли ви використовуєте метод init для визначення моделі, 
// вам не потрібно окремо створювати файл schema. 
// Метод init вже включає в собі визначення схеми полів моделі і інші конфігураційні параметри.
// Отже, якщо ви використовуєте init, ви можете видалити файл schema, 
// оскільки схема полів буде визначена безпосередньо в методі init