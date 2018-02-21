module.export = function(app) {
    const User = sequelize.define('user', {
      username: {
        type: Sequelize.STRING
    },
      email: {
        type: Sequelize.STRING
    },
      password: {
          type: Seuqlize.STRING
      }
    });

    // force: true will drop the table if it already exists
    User.sync({force: true}).then(() => {
      // Table created
      return User.create({
        
      });
    });
};
