import { getFirestore, collection, addDoc } from "firebase/firestore";

export function getWelcomeMessage() {
  return "Welcome to NeuClix! We are excited to help you build your free website! Lets get started.";
}

export function askForCompanyName() {
  return "What is your company's name?";
}

export function askForCompanyIndustry() {
  return "What industry is your company in?";
}

export function askForContactInformation() {
  return "What is the best email address to reach you at?";
}

export async function saveInformation(db, data) {
  const usersCollection = collection(db, "users");
  const { companyName, companyIndustry, contactEmail, websiteRequirements, designPreferences, uniqueNeeds } = data;
  try {    
    const docRef = await addDoc(usersCollection, {
      companyName: companyName,
      companyIndustry: companyIndustry,
      contactEmail: contactEmail,
      websiteRequirements: websiteRequirements,
      designPreferences: designPreferences,
      uniqueNeeds: uniqueNeeds,
      consultationDateTime: data.consultationDateTime,
    });
    console.log("Data saved correctly to firestore! Document ID: " + docRef.id);
  } catch (e) {console.error("Error adding document: ", e);}
}

export function askForWebsiteRequirements() {
  return "Could you describe your website requirements?";
}

export function askForDesignPreference() {
  return "Do you have any specific design preferences or styles you like?";
}

export function askForUniqueNeeds() {
  return "Do you have any unique needs for your website?";
}

export function offerConsultation() {
  return "Would you like to schedule a free consultation to discuss your website project further? If so, what is your preferred date and time?";
}