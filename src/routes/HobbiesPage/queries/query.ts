import { AxiosResponse } from "axios";
import { api } from "../../../utils/api";
import { Hobby } from "../Models/models";

export const getTestHobby = async () => {
  try {
    const result: AxiosResponse<Hobby[]> = await api.get("/hobby");

    return result.data;
  } catch (error) {
    console.log("not working right now");
  }
};
