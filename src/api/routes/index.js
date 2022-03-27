import { Router } from "express";
import TestRouter from "./testRouter";
import ContactRouter from "~/api/components/contact.routes";

const Routes = Router();

// Routes.use('/test', TestRouter);
Routes.use('/test', TestRouter);

// contacts
Routes.use('/', ContactRouter);

export default Routes;