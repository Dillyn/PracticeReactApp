import { AxiosResponse } from "axios";
import { api } from "../../../utils/api";
import { Hobby, IHobby } from "../Models/models";

export const getTestHobby = async () => {
  try {
    const result:AxiosResponse<Hobby[]> = await api.get("/hobby");

    return result.data;
  } catch (error) {
    console.log("not working right now");
  }
}

//   export const getHobby = async () => {
//     try {
//       const result:AxiosResponse<Hobby[]> = await api.get("/hobby");
  
//       return result.data;
//     } catch (error1) {
//       console.log("Real Hobby not working right now");
//     }
// }

;
