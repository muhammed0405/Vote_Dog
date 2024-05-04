/** @format */

import axios from "axios"
import { Dispatch } from "redux"
import { dogsActionsTypes } from "../actionTypes/actionTypes"
import { Breeds, IDogsAction, IDogsType } from "../Interfaces/interFaces"
export const getDogs =
	() =>
	async (dispatch: Dispatch<IDogsAction>): Promise<void> => {
		try {
			const response = await axios.get<IDogsType>(
				"https://dog.ceo/api/breeds/image/random"
			)

			dispatch({
				type: dogsActionsTypes.GET_DOGS_SUCCESS,
				payload: response.data,
			})
		} catch (error) {
			dispatch({
				type: dogsActionsTypes.GET_DOGS_ERROR,
				payload: "it is an Error" || "Error fetching data",
			})
		}
	}

export const getAllBreeds = () => async (dispatch: Dispatch<IDogsAction>) => {
	try {
		const url = await axios.get<Breeds>("https://dog.ceo/api/breeds/list/all")

		dispatch({
			type: dogsActionsTypes.GET_ALL_BREEDS,
			payload: url.data,
		})
	} catch (error) {
		console.log("error", error)
	}
}
export const searchDogs =
	(search: string) => async (dispatch: Dispatch<IDogsAction>) => {
		try {
			const url = await axios.get<IDogsType>(
				`https://dog.ceo/api/breed/${search}/images/random`
			)

			dispatch({
				type: dogsActionsTypes.SEARCH_DOGS,
				payload: url.data,
			})
		} catch (error) {
			console.log(error)
		}
	}

export const addToLiked =
	(dogLink: string) => (dispath: Dispatch<IDogsAction>) => {
		dispath({
			type: dogsActionsTypes.ADD_TO_LIKED,
			payload: dogLink,
		})
	}
