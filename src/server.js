
const connectDB = require('./modules/config/db');
const env = require('./modules/config/env');
const app = require('./app');

// Connect to DB
const startServer = async () => {
    await connectDB();
    app.listen(env.port, () => console.log(`Server running on port ${env.port}`));
}
startServer();