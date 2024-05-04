/** @format */

import { useEffect } from "react"
import { BiSolidDislike, BiSolidLike } from "react-icons/bi"
import { FaRegHeart } from "react-icons/fa"
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
		<div className="flex flex-col gap-4 bg-slate-600 border border-white p-4 sm:p-8 md:p-16 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative">
			<Header />
			<h1 className="text-xl sm:text-2xl font-bold text-center text-white">
				Итке добуш бериңиз
			</h1>
			<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
				<img className="object-cover" src={dogs.message} alt="" />
			</div>
			<div className="flex justify-between items-center absolute bottom-4 left-4 right-4 md:left-8 md:right-8">
				<button
					className="text-2xl transition-all duration-300 hover:scale-110 hover:text-red-500"
					onClick={() => addToLiked(dogs.message)}
				>
					<FaRegHeart />
				</button>
				<div className="flex justify-between items-center space-x-2">
					<button
						className="bg-orange-500 text-white text-xl h-10 w-10 md:w-auto px-4 transition-all hover:scale-105 font-bold rounded"
						onClick={() => getDogs()}
					>
						<BiSolidLike />
					</button>
					<button
						className="bg-red-500 text-white text-xl h-10 w-10 md:w-auto px-4 transition-all hover:scale-105 font-bold rounded"
						onClick={() => getDogs()}
					>
						<BiSolidDislike />
					</button>
				</div>
			</div>
		</div>
	)
}
