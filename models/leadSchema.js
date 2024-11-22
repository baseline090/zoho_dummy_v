const mongoose = require('mongoose');

// Define the Owner schema
const ownerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  email: { type: String, required: true }
});

// Define the Created_By schema
const createdBySchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  email: { type: String, required: true }
});

// Define the main lead schema
const leadSchema = new mongoose.Schema({
  Owner: { type: ownerSchema, required: true },
  Company: { type: String },
  Email: { type: String },
  $currency_symbol: { type: String },
  $field_states: { type: String },
  Last_Activity_Time: { type: Date },
  Industry: { type: String },
  $state: { type: String },
  Unsubscribed_Mode: { type: String },
  $converted: { type: Boolean },
  $process_flow: { type: Boolean },
  Street: { type: String },
  $locked_for_me: { type: Boolean },
  Zip_Code: { type: String },
  id: { type: String, required: true, unique: true },
  $approved: { type: Boolean },
  $approval: {
    delegate: { type: Boolean },
    takeover: { type: Boolean },
    approve: { type: Boolean },
    reject: { type: Boolean },
    resubmit: { type: Boolean }
  },
  Created_Time: { type: Date },
  $editable: { type: Boolean },
  City: { type: String },
  No_of_Employees: { type: Number },
  State: { type: String },
  Country: { type: String },
  Created_By: { type: createdBySchema, required: true },
  $zia_owner_assignment: { type: String },
  Annual_Revenue: { type: Number },
  Secondary_Email: { type: String },
  Description: { type: String },
  Rating: { type: String },
  $review_process: {
    approve: { type: Boolean },
    reject: { type: Boolean },
    resubmit: { type: Boolean }
  },
  Website: { type: String },
  Twitter: { type: String },
  Salutation: { type: String },
  First_Name: { type: String },
  Full_Name: { type: String },
  Lead_Status: { type: String },
  Record_Image: { type: String },
  Modified_By: { type: createdBySchema },
  $review: { type: String },
  Skype_ID: { type: String },
  Phone: { type: String },
  Email_Opt_Out: { type: Boolean },
  Designation: { type: String },
  Modified_Time: { type: Date },
  $converted_detail: { type: Object },
  Unsubscribed_Time: { type: Date },
  Mobile: { type: String },
  $orchestration: { type: Boolean },
  Last_Name: { type: String },
  $in_merge: { type: Boolean },
  Locked__s: { type: Boolean },
  Lead_Source: { type: String },
  Tag: [{ type: String }],
  Fax: { type: String },
  $approval_state: { type: String }
});

// Create the model from the schema
const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
