/** @format */

import { IDogsAction, IDogsState } from "../Interfaces/interFaces"
import { dogsActionsTypes } from "../actionTypes/actionTypes"

const initialState: IDogsState = {
	dogs: {
		message: "",
		status: "",
	},
	dogsChosen: {
		message: "",
		status: "",
	},

	likedDogs: [],

	allBreeds: {},
	loading: false,
	error: null,
}

// reducer
export const userReducer = (
	state = initialState,
	action: IDogsAction
): IDogsState => {
	switch (action.type) {
		case dogsActionsTypes.GET_DOGS_SUCCESS:
			return {
				...state,
				dogs: action.payload,
				loading: false,
				error: null,
			}

		case dogsActionsTypes.GET_DOGS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload!,
			}
		case dogsActionsTypes.SEARCH_DOGS:
			return {
				...state,
				dogsChosen: action.payload,
			}

		case dogsActionsTypes.GET_ALL_BREEDS:
			return {
				...state,
				allBreeds: action.payload,
			}

		case dogsActionsTypes.ADD_TO_LIKED: {
			const isAdded = state.likedDogs.find(el => el === action.payload)
			if (isAdded) {
				return state
			} else {
				return {
					...state,
					likedDogs: [...state.likedDogs, action.payload],
				}
			}
		}

		default:
			return state
	}
}
