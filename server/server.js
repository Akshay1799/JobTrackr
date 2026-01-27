import { connectDB } from './src/config/db.js';
import {app} from './app.js';
import { config } from './src/config/index.js';

const startServer = ()=>{
    connectDB().then(()=>{
        app.listen(config.port, ()=>console.log(`Server is listening on port ${config.port}`))
    })
    .catch((error)=>{
        console.log(`Database connection error: ${error.message}`);
        process.exit(1);
    })
}

startServer();