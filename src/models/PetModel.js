module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    specie: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wingsNumber: {
      type: DataTypes.INTEGER
    },
    pawsNumber: {
      type: DataTypes.INTEGER
    }
  });
  Pet.associate = ({ User }) => {
    Pet.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
  };

  return Pet;
};
