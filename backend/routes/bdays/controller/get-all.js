const bdays = require('../../../models/bdays');

const getAll = async (req, res) => {

  try {
    const data = await bdays.find();
    res.json(data);
  } catch(error) {
    res.send(error);
  };

};

module.exports = getAll;