
const { fetchLeads } = require('../config/zcrm_config');
const Lead = require('../models/leadSchema');  // Import your MongoDB model

// Controller function to fetch leads from Zoho CRM
const fetchLeadsData = async (req, res) => {
  try {
    const leadsData = await fetchLeads();  // Fetch the lead data from Zoho CRM

    // Check if leads data is available
    if (!leadsData || !leadsData.data) {
      return res.status(400).json({ message: 'No leads data found' });
    }

    // Send the fetched leads data as a response
    res.status(200).json({ data: leadsData.data });
  } catch (error) {
    console.error('Error fetching leads:', error.message);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
};

// Controller function to fetch leads from Zoho CRM and store them in MongoDB
const fetchAndStoreLeadsData = async (req, res) => {
  try {
    const leadsData = await fetchLeads();  // Fetch the lead data from Zoho CRM

    // Check if leads data is available
    if (!leadsData || !leadsData.data) {
      return res.status(400).json({ message: 'No leads data found' });
    }

    // Loop through each lead and save them to MongoDB
    for (const leadData of leadsData.data) {
      // Check if the lead already exists in the database using its unique ID
      const existingLead = await Lead.findOne({ id: leadData.id });

      if (!existingLead) {
        // If lead does not exist, create a new lead and save to the database
        const newLead = new Lead({
          Owner: leadData.Owner,
          Company: leadData.Company,
          Email: leadData.Email,
          $currency_symbol: leadData.$currency_symbol,
          $field_states: leadData.$field_states,
          Last_Activity_Time: leadData.Last_Activity_Time,
          Industry: leadData.Industry,
          $state: leadData.$state,
          Unsubscribed_Mode: leadData.Unsubscribed_Mode,
          $converted: leadData.$converted,
          $process_flow: leadData.$process_flow,
          Street: leadData.Street,
          $locked_for_me: leadData.$locked_for_me,
          Zip_Code: leadData.Zip_Code,
          id: leadData.id,  // Ensure the lead has a unique ID
          $approved: leadData.$approved,
          $approval: leadData.$approval,
          Created_Time: leadData.Created_Time,
          $editable: leadData.$editable,
          City: leadData.City,
          No_of_Employees: leadData.No_of_Employees,
          State: leadData.State,
          Country: leadData.Country,
          Created_By: leadData.Created_By,
          $zia_owner_assignment: leadData.$zia_owner_assignment,
          Annual_Revenue: leadData.Annual_Revenue,
          Secondary_Email: leadData.Secondary_Email,
          Description: leadData.Description,
          Rating: leadData.Rating,
          $review_process: leadData.$review_process,
          Website: leadData.Website,
          Twitter: leadData.Twitter,
          Salutation: leadData.Salutation,
          First_Name: leadData.First_Name,
          Full_Name: leadData.Full_Name,
          Lead_Status: leadData.Lead_Status,
          Record_Image: leadData.Record_Image,
          Modified_By: leadData.Modified_By,
          $review: leadData.$review,
          Skype_ID: leadData.Skype_ID,
          Phone: leadData.Phone,
          Email_Opt_Out: leadData.Email_Opt_Out,
          Designation: leadData.Designation,
          Modified_Time: leadData.Modified_Time,
          $converted_detail: leadData.$converted_detail,
          Unsubscribed_Time: leadData.Unsubscribed_Time,
          Mobile: leadData.Mobile,
          $orchestration: leadData.$orchestration,
          Last_Name: leadData.Last_Name,
          $in_merge: leadData.$in_merge,
          Locked__s: leadData.Locked__s,
          Lead_Source: leadData.Lead_Source,
          Tag: leadData.Tag,
          Fax: leadData.Fax,
          $approval_state: leadData.$approval_state
        });

        await newLead.save();  // Save the new lead to the database
      }
    }

    // Send a response after saving the leads data to the database
    res.status(200).json({ message: 'Leads data fetched and stored successfully' });

  } catch (error) {
    console.error('Error fetching and storing leads:', error.message);
    res.status(500).json({ error: 'Failed to fetch and store leads' });
  }
};



// Controller function to fetch email and company name from the database
const fetchEmailsAndCompanies = async (req, res) => {
  try {
    // Fetch all leads, projecting only the email and company name fields
    const leadsData = await Lead.find({}, 'Email Company');

    // Check if data was found
    if (leadsData.length === 0) {
      return res.status(400).json({ message: 'No leads found in the database' });
    }

    // Send the fetched data as a response
    res.status(200).json({ data: leadsData });
  } catch (error) {
    console.error('Error fetching leads:', error.message);
    res.status(500).json({ error: 'Failed to fetch emails and company names' });
  }
};

// Export the entire controller object
module.exports = {
  fetchLeadsData,
  fetchAndStoreLeadsData,
  fetchEmailsAndCompanies
};