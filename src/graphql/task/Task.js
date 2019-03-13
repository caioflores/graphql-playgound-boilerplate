const { Task } = module.require('../../models');

module.exports = {
  Query: {
    task: async (obj, { id }) => Task.findById(id)
  },
  Mutation: {
    createTask: (obj, { name, description, status }, { auth }, info) =>
      Task.create({ name, description, status, UserId: auth.user.id }).catch(error => {
        throw error;
      })
  }
};
