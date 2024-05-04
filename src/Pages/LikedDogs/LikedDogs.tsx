/** @format */

import { FC } from "react"
import { useTypedSelectorHook } from "../../Redux/customHooks/useTypedSelectorHook"
import Header from "../../components/Header"

export const LikedDogs: FC = () => {
	const likedDogs = useTypedSelectorHook(state => state.user.likedDogs)
	return (
		<div className="flex flex-col w-[500px] h-[600px]  border bg-slate-600 border-white p-16">
			<Header />
			<div className="grid w-full mt-10 place-items-center overflow-auto">
				{likedDogs.length > 0 ? (
					<div className=" w-full overflow-auto flex flex-wrap gap-3">
						{likedDogs.map(el => (
							<img className="w-28 h-28" src={el} alt="" />
						))}
					</div>
				) : (
					<h1 className="mt-10">Сизде жактырган иттер тизмеси бош</h1>
				)}
			</div>
		</div>
	)
}
