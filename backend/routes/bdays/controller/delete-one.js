const bdays = require('../../../models/bdays');

const deleteOne = async (req, res) => {

    try {
        const { id } = req.body;
        await bdays.deleteOne({_id: id });
        const data = await bdays.find(); 
        res.send(data);
    } catch (error) {
        res.send(error);
    };

};

module.exports = deleteOne;
