import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDZiMDQzNDdkYzZjNjUyZGQxY2U4YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTUyMDMxNH0.GLVv0d-9l00eoSjUK4SnkCVhwdIWxSl0YZyF0tpFajE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
