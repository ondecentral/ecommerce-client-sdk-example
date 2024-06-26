import Lucia from "luciasdk-t3";

const lucia = new Lucia({
  baseURL: process.env.REACT_APP_BASE_URL,
  api_key: process.env.REACT_APP_API_KEY,
});

export default lucia;
