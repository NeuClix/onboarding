import { getWelcomeMessage, askForCompanyName, askForCompanyIndustry, askForContactInformation, askForWebsiteRequirements, askForDesignPreference, askForUniqueNeeds, offerConsultation, saveInformation } from './chatbot.js';
import { db } from './firebaseConfig.js';

let data = {};
function handleUserInput(userInput, conversationState) {
  console.log("handleUserInput called with:", { userInput, conversationState });

  if (!userInput && conversationState !== "WELCOME" && conversationState) {
    console.log("Invalid input detected.");
    return "Please repeat your input.";
  }
  
  if (conversationState === "WELCOME") {
    const message = askForCompanyName();
    return message;
  }
  
  if (conversationState === "COMPANY_NAME") {
    data.companyName = userInput;    
    console.log("Transitioning to COMPANY_INDUSTRY state.");
    return askForCompanyIndustry();
  }
  
  if (conversationState === "COMPANY_INDUSTRY") { 
    data.companyIndustry = userInput;
    console.log("Transitioning to CONTACT_INFORMATION state.");
    return askForContactInformation();
  }

  if (conversationState === "CONTACT_INFORMATION") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(userInput)) {
      data.contactEmail = userInput;
      console.log("Transitioning to WEBSITE_REQUIREMENTS state.");
      return askForWebsiteRequirements();
    } else {
        console.log("Invalid email detected.");
      return "Please enter a valid email address.";
    }
    
  }
  
  if (conversationState === "WEBSITE_REQUIREMENTS") {
    data.websiteRequirements = userInput;
    console.log("Transitioning to DESIGN_PREFERENCE state.");
    return askForDesignPreference();
  }
  if (conversationState === "UNIQUE_NEEDS") {
    data.uniqueNeeds = userInput;
    console.log("Transitioning to OFFER_CONSULTATION state.");
    return offerConsultation();
  }  



  if (conversationState === "AWAITING_AVAILABILITY") {
    data.consultationDateTime = userInput;
    saveInformation(db, data);
    return "Perfect! We have scheduled your consultation. We will be in touch soon.";
  }

  if (!conversationState) return getWelcomeMessage();
  if (!conversationState){
    console.log("No state found.");
  return getWelcomeMessage();
}
}
export { handleUserInput };