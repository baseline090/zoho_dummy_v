
// const express = require('express');
// const router = express.Router();
// const zCrmController = require('../controllers/z_crm_controller'); // Require the entire controller file

// // Route to fetch leads from Zoho CRM
// router.get('/fetch/leads', zCrmController.fetchLeadsData);

// // Route to fetch and store leads in the database
// router.get('/fetch/storedb', zCrmController.fetchLeadsDataAndStoreInDB);

// // Route to fetch emails and company names from the database
// router.get('/fetch/emails-companies', zCrmController.fetchEmailsAndCompanies);  // Assuming you added fetchEmailsAndCompanies in the z_crm_controller.js

// module.exports = router;

const express = require('express');
const router = express.Router();
const zCrmController = require('../controllers/z_crm_controller'); // Require the entire controller file

// Route to fetch leads from Zoho CRM
router.get('/fetch/leads', zCrmController.fetchLeadsData);

// Route to fetch and store leads in the database
router.get('/fetch/storedb', zCrmController.fetchAndStoreLeadsData);

// Route to fetch emails and company names from the database
router.get('/fetch/emails-companies', zCrmController.fetchEmailsAndCompanies);

module.exports = router;
