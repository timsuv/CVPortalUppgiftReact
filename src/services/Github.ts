import { IProject } from "../modeles/IProject";

export const getGitData = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/timsuv/repos`);
    const data:IProject[] = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.log(error);
  }
  
};
