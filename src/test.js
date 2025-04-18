import { handleUserInput } from './conversationLogic.js';
import { initializeFirebase } from './firebaseConfig.js';

initializeFirebase();

let welcomeMessage = handleUserInput("", undefined);
if (welcomeMessage === "Welcome to NeuClix! We are excited to help you build your free website! Lets get started.") {
    console.log("Test Passed: Welcome message is correct.");
} else {
    console.error("Test Failed: Welcome message is incorrect.");
}

let askForCompanyName = handleUserInput("", "WELCOME");
if (askForCompanyName === "What is your company's name?") {
    console.log("Test Passed: Ask for company name message is correct.");
} else {
    console.error("Test Failed: Ask for company name message is incorrect.");
}

let askForCompanyIndustry = handleUserInput("NeuClix", "COMPANY_NAME");
if (askForCompanyIndustry === "What industry is your company in?") {
    console.log("Test Passed: Ask for company industry message is correct.");
} else {
    console.error("Test Failed: Ask for company industry message is incorrect.");
}

let askForContactInformation = handleUserInput("Technology", "COMPANY_INDUSTRY");
if (askForContactInformation === "What is the best email address to reach you at?") {
    console.log("Test Passed: Ask for contact information message is correct.");
} else {
    console.error("Test Failed: Ask for contact information message is incorrect.");
}

let askForWebsiteRequirements = handleUserInput("test@example.com", "CONTACT_INFORMATION");
if (askForWebsiteRequirements === "Could you describe your website requirements?") {
    console.log("Test Passed: Ask for website requirements message is correct.");
} else {
    console.error("Test Failed: Ask for website requirements message is incorrect.");
}

let askForDesignPreference = handleUserInput("I need a simple website", "WEBSITE_REQUIREMENTS");
if (askForDesignPreference === "Do you have any specific design preferences or styles you like?") {
    console.log("Test Passed: Ask for design preference message is correct.");
} else {
    console.error("Test Failed: Ask for design preference message is incorrect.");
}

let askForUniqueNeeds = handleUserInput("I like minimal design", "DESIGN_PREFERENCE");
if (askForUniqueNeeds === "Do you have any unique needs for your website?") {
    console.log("Test Passed: Ask for unique needs message is correct.");
} else {
    console.error("Test Failed: Ask for unique needs message is incorrect.");
}

let offerConsultation = handleUserInput("No unique needs", "UNIQUE_NEEDS");
if (offerConsultation === "Would you like to schedule a free consultation to discuss your website project further? If so, what is your preferred date and time?") {
    console.log("Test Passed: Offer consultation message is correct.");
} else {
    console.error("Test Failed: Offer consultation message is incorrect.");
}

let invalidConsultation = handleUserInput("maybe", "OFFER_CONSULTATION");
if (invalidConsultation === "Please answer yes or no.") {
    console.log("Test Passed: Invalid consultation message is correct.");
} else {
    console.error("Test Failed: Invalid consultation message is incorrect.");
}

let askForDateTime = handleUserInput("yes", "OFFER_CONSULTATION");
if (askForDateTime === "Great! Please provide your preferred date and time for the consultation.") {
    console.log("Test Passed: Ask for date and time message is correct.");
} else {
    console.error("Test Failed: Ask for date and time message is incorrect.");
}

let consultationScheduled = handleUserInput("2024-01-20 10:00", "AWAITING_AVAILABILITY");
if (consultationScheduled === "Perfect! We have scheduled your consultation. We will be in touch soon.") {
    console.log("Test Passed: Consultation scheduled message is correct.");
} else {
    console.error("Test Failed: Consultation scheduled message is incorrect.");
}

let invalidEmail = handleUserInput("invalid-email", "CONTACT_INFORMATION");
if (invalidEmail === "Please enter a valid email address.") {
    console.log("Test Passed: Invalid email message is correct.");
} else {
    console.error("Test Failed: Invalid email message is incorrect.");
}

let invalidDateTime = handleUserInput("invalid-date", "AWAITING_AVAILABILITY");
if (invalidDateTime === "Perfect! We have scheduled your consultation. We will be in touch soon.") {
    console.log("Test Passed: Invalid date time message is correct.");
} else {
    console.error("Test Failed: Invalid date time message is incorrect.");
}

let validDateTime = handleUserInput("2024-01-20 10:00", "AWAITING_AVAILABILITY");
if (validDateTime === "Perfect! We have scheduled your consultation. We will be in touch soon.") {
    console.log("Test Passed: Valid date time message is correct.");
} else {
    console.error("Test Failed: Valid date time message is incorrect.");
}