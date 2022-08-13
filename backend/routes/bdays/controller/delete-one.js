const bdays = require('../../../models/bdays');

const deleteOne = async (req, res) => {

    try {
        const { id } = req.body;
        await bdays.deleteOne({_id: id });
        const data = await bdays.find(); 
        console.log('🌈 SUCCESS: bday has been deleted!');
        res.send(data);
    } catch (error) {
        console.log('🔥 ERROR: bday could not delete bday!');
        res.send(error);
    };

};

module.exports = deleteOne;
