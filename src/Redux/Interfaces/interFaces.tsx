/** @format */

import { dogsActionsTypes } from "../actionTypes/actionTypes"

export interface IDogsType {
	message: string
	status: string
}
export interface Breeds {
	[key: string]:string[];
}
export interface IDogsState {
	dogs: IDogsType
	dogsChosen: IDogsType
	likedDogs: string[]
	loading: boolean
	error: string | null
	allBreeds: Breeds
}

export interface ISearchDogs {
	type: dogsActionsTypes.SEARCH_DOGS
	payload: IDogsType
}
export interface IDogsSuccess {
	type: dogsActionsTypes.GET_DOGS_SUCCESS
	payload: IDogsType
}
export interface IDogsError {
	type: dogsActionsTypes.GET_DOGS_ERROR
	payload?: string
}

export interface IGetAllBreeds {
	type: dogsActionsTypes.GET_ALL_BREEDS
	payload: Breeds
}
export interface IAddToLiked {
	type: dogsActionsTypes.ADD_TO_LIKED
	payload: string
}

export type IDogsAction =
	| IDogsSuccess
	| IDogsError
	| ISearchDogs
	| IGetAllBreeds
	| IAddToLiked