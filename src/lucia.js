import LuciaSDK from "luciasdk-t3";
// import request from "superstest";

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
      LuciaSDK.authenticate()
      LuciaSDK.init({
        api_key: "4c6fdaba-7c4d641f-9ca31d3c-2c775c8f-a45fb754-3fe72360-111ff045-10b7b2e2",
        baseURL: "https://api.ads.clickinsights.xyz",
        // clientId: clientId,
        // username: Register.name,
      });
      console.log("api call");
      lucia.apiCall("product-click");
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
  apiCall: async (apiCall) => {
    try {
      // let proxyURL = "http://localhost:3000/";
      let baseUrl = "api.ads.clickinsights.xyz/api/sdk";
      let endPoint = baseUrl; //proxyURL + baseUrl;

      console.log(endPoint + "/click");
      const response = await fetch(endPoint + "/click", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "4c6fdaba-7c4d641f-9ca31d3c-2c775c8f-a45fb754-3fe72360-111ff045-10b7b2e2",
          "x-real-ip": "0.0.0.0",
        },
        body: JSON.stringify({
          session: {
            id: "b7f354a8-8fd6-4482-8493-f58946f1bb3c",
            hash: "db9833d71f43301b90a5eeca4d7f2eefd642b97f49187031ce11af350e5ca719",
          },
          user: {
            name: "user1",
            data: {
              data: { uniqueHash: "abc", screenWidth: 1200, screeHeight: 480 },
            },
          },
          lid: "lid",
          button: "view",
        }),
      });

      const res = await response.json();
      console.log("API response:", res);
      // let jsonResponse = await response.json();
      // console.log("API response:", jsonResponse);
    } catch (error) {
      console.error("API call failed:", error);
    }
  },
};

// Initialize the SDK
lucia.init();

export default lucia;
