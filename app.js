import express from "express";
import {createServer} from "node:http";

const app = express();
const server = createServer(app);

import pageRoutes from './src/routes/pages.js';
app.use('/', pageRoutes);

const PORT = 80;
server.listen(PORT, () => {
    console.log('server started at http://localhost ...');
});