const bdays = require('../../../models/bdays');

const createOne = async (req, res) => {

  try {
    const { firstname, lastname, birthday } = req.body;
    await bdays.create({
      firstname: firstname,
      lastname: lastname,
      birthday: {
        day: birthday.day, 
        month: birthday.month, 
        year: birthday.year
      }
    });
    const data = await bdays.find();
    res.send(data);
  } catch(error) {
    res.send(error);
  };

};

module.exports = createOne;