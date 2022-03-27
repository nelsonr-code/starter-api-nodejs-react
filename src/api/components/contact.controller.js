import DBFirestore from "~/services/firebase/connection";

export const getContacts = (async (req, res) => {
    
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
        res.json({ "all contacts": allContacts });
            
    } catch (error) {
        console.error(`An error ocurred getting contacts: ${error}`);        
    }

})