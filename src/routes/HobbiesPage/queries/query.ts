import { AxiosResponse } from "axios";
import { api } from "../../../utils/api";
import { Hobby } from "../Models/models";

export const getAllHobbies = async () => {
  try {
    const result: AxiosResponse<Hobby[]> = await api.get("/hobby");

    return result.data;
  } catch (error) {
    console.log("not working right now");
  }
};

export const getHobby = async (id: number | undefined): Promise<Hobby> => {
  try {
    const result: AxiosResponse<Hobby> = await api.get(`/hobby/${id}`);
    return result.data;
  } catch (error) {
    console.error("Can't find record");
    throw error; // You may want to throw to handle errors properly in the query
  }
};
