const db = require("../models");

const findUser = user => {
  return db.user.findOne({
    where: { nickname: user.nick, password: user.pass }
  });
};

module.exports = {
  findUser
};
