/** @format */

import { FC } from "react"
import { useTypedSelectorHook } from "../../Redux/customHooks/useTypedSelectorHook"
import Header from "../../components/Header"

export const LikedDogs: FC = () => {
	const likedDogs = useTypedSelectorHook(state => state.user.likedDogs)
	return (
		<div className="flex flex-col gap-4 bg-slate-600 border border-white p-4 sm:p-8  w-full h-[500px] max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative">
			<Header />
			<div className="grid min-w-[90%] h-96 place-items-center overflow-auto">
				{likedDogs.length > 0 ? (
					<div className=" border-red-600 w-full  overflow-auto flex flex-wrap justify-center gap-3 p-4">
						<h1 className="text-xl h-0 text-white text-center mt-10 opacity-0">
							Сиз жактырган иттердин сүрөтү жок
						</h1>
						{likedDogs.map((el, index) => (
							<img
								key={index}
								className="w-28 h-28 object-cover"
								src={el}
								alt={`Liked dog ${index}`}
							/>
						))}
					</div>
				) : (
					<h1 className="text-xl  text-white text-center mt-10">
						Сиз жактырган иттердин сүрөтү жок
					</h1>
				)}
			</div>
		</div>
	)
}
