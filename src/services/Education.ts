import { ICv } from "../modeles/ICv";

export const getJsonCVData = async () => {
  try {
    const response = await fetch("/cvEducation.json");
    const data:ICv = await response.json();
    return data;

  } catch (error) {
    console.log(error);
  }
  
};
