const router = require("express").Router()


const { 

    getAllContacts,
    createContact,
    getContactsById,
    updateContact,
    deleteContact
} = require("./controlerRoutes")


router.get("/", getAllContacts)

router.post("/", createContact)

router.get("/:id", getContactsById)

router.put("/:id", updateContact)

router.delete("/:id", deleteContact)

module.exports = router