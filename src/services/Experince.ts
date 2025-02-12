import { IExperience } from "../modeles/IExperience";

export const getJsonCVExperience = async () => {
  try {
    const response = await fetch("/cvExperience.json");
    const data:IExperience = await response.json();
    return data;

  } catch (error) {
    console.log(error);
  }
  
};
