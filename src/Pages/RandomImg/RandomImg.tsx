/** @format */

import { useEffect } from "react"
import {
	BiDownvote,
	BiSolidDislike,
	BiSolidLike,
	BiUpvote,
} from "react-icons/bi"
import { FaRegHeart, FaSearch } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { UseTypedDispatch } from "../../Redux/customHooks/useTypedDispatch"
import { useTypedSelectorHook } from "../../Redux/customHooks/useTypedSelectorHook"

export default function RandomImg() {
	const { getDogs, addToLiked } = UseTypedDispatch()

	const dogs = useTypedSelectorHook(state => state.user.dogs)

	useEffect(() => {
		getDogs()
	}, [])

	return (
		<div className="flex w-[500px] h-[600px] flex-col gap-4 border bg-slate-600 border-white p-16 relative">
			<div className="flex w-full  gap-8 items-center">
				<NavLink to="/random" className="flex">
					<BiUpvote />
					<BiDownvote />
				</NavLink>
				<NavLink to="/choose">
					<FaSearch />
				</NavLink>
				<NavLink to="/liked_dogs">
					<FaRegHeart />
				</NavLink>
			</div>
			<h1>Итке добуш берүү</h1>
			<img className="border w-96 h-96 " src={dogs.message} alt="" />

			<div className="flex justify-between items-center absolute bottom-4 left-16 w-[370px] ">
				<button
					className="text-xl transition-all duration-300 hover:scale-110 hover:text-red-500"
					onClick={() => {
						getDogs()
						addToLiked(dogs.message)
					}}
				>
					<FaRegHeart />
				</button>

				<div className="w-36 flex justify-between ">
					<button
						className="bg-orange-500 text-xl h-10 transition-all  hover:scale-105 text-white font-bold py-2 px-4 rounded "
						onClick={() => getDogs()}
					>
						<BiSolidLike />
					</button>

					<button
						className="bg-red-500 text-xl h-10 transition-all hover:scale-105 text-white font-bold py-2 px-4 rounded "
						onClick={() => getDogs()}
					>
						<BiSolidDislike />
					</button>
				</div>
			</div>
		</div>
	)
}
