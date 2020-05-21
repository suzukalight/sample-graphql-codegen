import { Op } from 'sequelize';

import { Models } from '../../../domain/models';

export const batchUsers = async (keys: readonly number[], models: Models) => {
  const _keys = keys as number[]; // FIXME: workaround

  const users = await models.User.findAll({
    where: { id: { [Op.in]: _keys } },
  });

  return keys.map(
    (key) => users.find((user) => user.id === key) || new Error(`No result for ${key}`),
  );
};
