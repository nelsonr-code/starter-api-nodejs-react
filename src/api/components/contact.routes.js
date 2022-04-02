import { Router } from "express";
import {
    getAllContacts, getContact,
    addContact, editContact,
    deleteContact
} from "./contact.controller";

const ContactRouter = Router();

ContactRouter.get("/", getAllContacts);
ContactRouter.get("/show-contact", getContact);
ContactRouter.post("/add-contact", addContact);
ContactRouter.post("/edit-contact/:id", editContact);
ContactRouter.get("/delete-contact/:id", deleteContact);

export default ContactRouter;
