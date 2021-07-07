import { DataTypes } from 'sequelize';

import { sequelize } from '../..';

const Message = sequelize.define(
  'Message',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING(65500),
      validate: {
        notEmpty: {
          msg: 'A message has to have a text.',
        },
      },
    },
  },
  {
    tableName: 'messages',
  },
);

export default Message;
