/** @format */

import { BiDownvote, BiUpvote } from "react-icons/bi"
import { FaRegHeart, FaSearch } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Header: React.FunctionComponent = () => {
	return (
		<div className="flex w-full border gap-8 items-center">
			<NavLink
				to="/random"
				className={({ isActive }) =>
					isActive ? "text-orange-500 flex" : "text-gray-100 flex"
				}
			>
				<BiUpvote />
				<BiDownvote />
			</NavLink>
			<NavLink
				to="/choose"
				className={({ isActive }) =>
					isActive ? "text-orange-500" : "text-gray-100"
				}
			>
				<FaSearch />
			</NavLink>
			<NavLink
				to="/liked_dogs"
				className={({ isActive }) =>
					isActive ? "text-orange-500" : "text-gray-100"
				}
			>
				<FaRegHeart />
			</NavLink>
		</div>
	)
}

export default Header
