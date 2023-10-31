const express = require("express");

const controller = require("../../controllers/contacts")

const router = express.Router();

router.get("/", controller.listContacts );

router.get("/:contactId", controller.getContactById );

router.post("/", controller.addContact);

router.delete("/:contactId", controller.removeContact );

router.put("/:contactId", controller.updateContactById );

module.exports = router;
