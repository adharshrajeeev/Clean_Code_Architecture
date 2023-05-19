import express from "express";
import mongoose from "mongoose";
import config from "./src/config/config.js";
import dbConnection from "./src/framework/database/mongodb/models/user.js";
import expressConfig from "./src/framework/webserver/express.js";
import serverConfig from "./src/framework/webserver/server.js";
import { routes } from "./src/framework/webserver/routes/routes.js";
 

const app=express();
            
expressConfig(app);

routes(app,express)

dbConnection(mongoose,config).connectToMongoose();

serverConfig(app,config).startServer(); 