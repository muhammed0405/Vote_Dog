/** @format */

import { FC } from "react"
import { BiDownvote, BiUpvote } from "react-icons/bi"
import { FaRegHeart, FaSearch } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useTypedSelectorHook } from "../../Redux/customHooks/useTypedSelectorHook"

export const LikedDogs: FC = () => {
	const likedDogs = useTypedSelectorHook(state => state.user.likedDogs)
	return (
		<div className="flex flex-col w-[500px] h-[600px]  border bg-slate-600 border-white p-16">
			<div className="flex w-full  gap-8 items-center mb-5">
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
			<div className="grid w-full place-items-center overflow-auto">
				{likedDogs.length > 0 ? (
					<div className=" w-full overflow-auto flex flex-wrap gap-3">
						{likedDogs.map(el => (
							<img className="w-28 h-28" src={el} alt="" />
						))}
					</div>
				) : (
					<h1>Сизде жактырган ит жок</h1>
				)}
			</div>
		</div>
	)
}
