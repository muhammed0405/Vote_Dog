/** @format */

import { useEffect } from "react"
import {
	BiSolidDislike,
	BiSolidLike,
} from "react-icons/bi"
import { FaRegHeart,  } from "react-icons/fa"
import { UseTypedDispatch } from "../../Redux/customHooks/useTypedDispatch"
import { useTypedSelectorHook } from "../../Redux/customHooks/useTypedSelectorHook"
import Header from "../../components/Header"

export default function RandomImg() {
	const { getDogs, addToLiked } = UseTypedDispatch()

	const dogs = useTypedSelectorHook(state => state.user.dogs)

	useEffect(() => {
		getDogs()
	}, [])

	return (
		<div className="flex w-[500px] h-[600px] flex-col gap-4 border bg-slate-600 border-white p-16 relative">
			<Header/>
			<h1>Итке добуш бериңиз</h1>
			<img className="border w-96 h-96 " src={dogs.message} alt="" />

			<div className="flex justify-between items-center absolute bottom-4 left-16 w-[370px] ">
				<button
					className="text-xl transition-all duration-300 hover:scale-110 hover:text-red-500"
					onClick={() => {
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
