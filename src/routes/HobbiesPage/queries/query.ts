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

export const updateHobby = async (
  id: number | undefined,
  body: Record<string, any>
)  => {
  console.log("Update api is called");
  const result: AxiosResponse<Hobby> = await api.put(`/hobby/${id}`, body);
  return result.data;
};

export const deleteHobby = async (
  id: number | undefined,
  
)  => {
  console.log("Delete api is called");
  const result: AxiosResponse<Hobby> = await api.delete(`/hobby/${id}`);
};