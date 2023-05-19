import { adminAuthRouter, userAuthRouter } from "./routeController.js";

export const routes= (app,express)=>{
    app.use('/api/v1',userAuthRouter(express));
    app.use('/api/v1/admin',adminAuthRouter(express));
}