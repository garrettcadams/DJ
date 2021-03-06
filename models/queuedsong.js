/* queuedsong.js
 * Model representing a song in a user's queue.
 */

exports.Model = null;
exports.name = 'QueuedSong';

exports.define = function(sequelize, DataTypes) {
  exports.Model = sequelize.define(exports.name, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    classMethods: {
      associate: function(models) {
        this.belongsTo(models.Song);
        this.belongsTo(models.User);
      }
    }
  });

  return exports.Model;
};

