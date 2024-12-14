const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Successfully Connected To Db');
    } catch (err) {
        console.error("Connection Failed:", err.message);
    }
}

export default connect;