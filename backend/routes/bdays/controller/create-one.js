const bdays = require('../../../models/bdays');

const createOne = async (req, res) => {

  try {
    const { firstname, lastname, bdayDate } = req.body;
    await bdays.create({
      firstname: firstname,
      lastname: lastname,
      bdayDate: {
        day: bdayDate.day, 
        month: bdayDate.month, 
        year: bdayDate.year
      }
    });
    const data = await bdays.find();
    res.send(data);
  } catch(error) {
    res.send(error);
  };

};

module.exports = createOne;