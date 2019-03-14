const { Pet } = module.require('../../models');

module.exports = {
  Query: {
    pet: async (obj, { name }) => Pet.findOne({ where: { name } })
  },
  Mutation: {
    createPet: (obj, { name, specie, age, gender, wingsNumber, pawsNumber }, { auth }) =>
      Pet.create({ name, specie, age, gender, wingsNumber, pawsNumber, UserId: auth.user.id }).catch(
        error => {
          throw error;
        }
      )
  },
  Pet: {
    __resolveType({ specie }, context, info) {
      if (specie === 'dog') {
        return 'Dog';
      } else if (specie === 'bird') {
        return 'Bird';
      }
      return 'Dog';
    }
  }
};
