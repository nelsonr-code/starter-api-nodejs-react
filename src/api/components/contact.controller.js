import DBFirestore from "~/services/firebase/connection";

export const getAllContacts = (async (req, resp) => {
    try {
        const querySnapshot = await DBFirestore.collection('contacts').get();
        const allContacts = querySnapshot.docs.map(doc => ({
            id: doc.id,
            // firstsname: doc.data().firstname,
            // lastname: doc.data().lastname,
            // phone: doc.data().phone,
            // email: doc.data().email,
            ...doc.data()
        }))
        console.log(allContacts);
        resp.json({ "all contacts": allContacts });

    } catch (error) {
        console.error(`An error ocurred getting contacts: ${error}`);
    }

})

export const getContact = async (req, resp) => {
    try {
        const idContact = req.params.id;

        const doc = await DBFirestore
            .collection('contacts')
            .doc(idContact)
            .get()

        resp.send(doc.data());

    } catch (error) {

    }
}

export const addContact = async (req, resp) => {
    try {
        const {
            firstname,
            lastname,
            phone,
            email
        } = req.body;

        await DBFirestore.collection('contacts').add({
            firstname,
            lastname,
            phone,
            email
        })

        resp.send("Contact added");

    } catch (error) {

    }
}

export const editContact = async (req, resp) => {
    try {
        const idContact = req.params.id;

        await DBFirestore
            .collection('contacts')
            .doc(idContact)
            .update(req.body)

        resp.send("contact edited");

    } catch (error) {

    }
}

export const deleteContact = async (req, res) => {
    try {
        const idContact = req.params.id;

        await DBFirestore
            .collection('contacts')
            .doc(idContact)
            .delete()

        res.send("contact deleted");

    } catch (error) {

    }
}
