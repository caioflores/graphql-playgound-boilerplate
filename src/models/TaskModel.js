module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM('todo', 'doing', 'done'),
      defaultValue: 'todo'
    }
  });
  Task.associate = ({ User }) => {
    Task.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
  };

  return Task;
};
