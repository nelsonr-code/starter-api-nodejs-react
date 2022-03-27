import { Router } from "express";
import { getContacts } from "./contact.controller";

const ContactRouter = Router();

ContactRouter.get("/", getContacts);

export default ContactRouter;
