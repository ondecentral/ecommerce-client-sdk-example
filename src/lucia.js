import LuciaSDK from "luciasdk-t3";
const lucia = {
  init: () => {
    LuciaSDK.init({
      baseURL: process.env.REACT_APP_BASE_URL,
      api_key: process.env.REACT_APP_API_KEY,
    });
  },

  pageView: (page) => {
    LuciaSDK.pageView(page);
  },
  trackConversion: async (eventTag, amount, eventDetails) => {
    try {
      console.log("Tracking conversion:", eventTag, amount, eventDetails);
      // LuciaSDK.buttonClick("conversion-button");
      // LuciaSDK.init({ api_key, baseURL, clientId, username });
      // LuciaSDK.userInfo({
      //   email: "test@test.com",
      //   firstName: "John",
      //   lastName: "Doe",
      // });
      await LuciaSDK.trackConversion(eventTag, amount, eventDetails);
      console.log("Conversion tracked:", eventTag);
    } catch (error) {
      console.error("Tracking conversion failed:", error);
    }
  },
  buttonClick: (buttonId) => {
    try {
      console.log("Button clicked:", buttonId);
      LuciaSDK.buttonClick(buttonId);
    } catch (error) {
      console.error("Button click failed:", error);
    }
  },
};

// Initialize the SDK
lucia.init();

export default lucia;
