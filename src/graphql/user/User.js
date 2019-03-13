const { User, Task } = module.require('../../models');

module.exports = {
  Mutation: {
    signUp: (obj, args) => User.signUp(args)
  },
  Query: {
    user: (obj, { id }) => User.findByPk(id),
    users: () => User.findAll({ include: [Task] }),
    login: (obj, args) => User.login(args)
  },
  User: {
    tasks: async (obj, args, { auth }) => Task.findAll({ where: { UserId: auth.user.id } })
  }
};
