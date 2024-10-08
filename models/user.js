import { DataTypes } from 'sequelize';
import sequelize from "../config/sequelize.js";
import Feed from "./feed.js";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: 'user',
    timestamps: true,
    underscored: true
});

import('./feed.js').then((module) => {
    const Feed = module.default;
    User.hasMany(Feed, { foreignKey: 'user_id', as: 'feeds' });
});

export default User;