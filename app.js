import express from "express";
import {createServer} from "node:http";

const app = express();
const server = createServer(app);

import pageRoutes from './src/routes/pages.js';
app.use('/', pageRoutes);

server.listen(80, () => {
    console.log('server started at http://localhost ...');
});