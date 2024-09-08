import apiClient from "./apiClient";

// Generar OTP
export const generateOtp = async (wallet: string) => {
  const response = await apiClient.post("/secure/user/generate-otp", {
    wallet,
  });
  return response.data;
};

// Login con OTP
export const login = async (otp: string, wallet: string) => {
  const response = await apiClient.post("/secure/user/login", {
    otp,
    wallet,
  });
  return response.data;
};

// Registro de Farmer
export const registerFarmer = async (userData: any) => {
  const response = await apiClient.post(
    "/secure/user/register/farmer",
    userData
  );
  return response.data;
};

// Registro de Investor
export const registerInvestor = async (userData: any) => {
  const response = await apiClient.post(
    "/secure/user/register/investor",
    userData
  );
  return response.data;
};

// Registro de Agronomist
export const registerAgronomist = async (userData: any) => {
  const response = await apiClient.post(
    "/secure/user/register/agronomist",
    userData
  );
  return response.data;
};
