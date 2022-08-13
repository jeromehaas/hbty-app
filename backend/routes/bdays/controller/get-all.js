const bdays = require('../../../models/bdays');

const getAll = async (req, res) => {

  try {
    const data = await bdays.find();
    console.log('🌈 SUCCESS: bdays has been fetched!');
    res.json(data);
  } catch(error) {
    console.log('🔥 ERROR: could not fetch bdays!');
    res.send(error);
  };

};

module.exports = getAll;