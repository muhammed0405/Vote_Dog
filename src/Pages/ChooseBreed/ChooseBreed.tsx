/** @format */

import { useEffect, useState } from "react"
import { UseTypedDispatch } from "../../Redux/customHooks/useTypedDispatch"
import { useTypedSelectorHook } from "../../Redux/customHooks/useTypedSelectorHook"
import Header from "../../components/Header"

export default function ChooseImg() {
	const [chosenBreed, setChosenBreed] = useState<string>("")
	const { searchDogs, getAllBreeds } = UseTypedDispatch()
	const [showBreeds, setShowBreeds] = useState<boolean>(false)
	const dogsChosen = useTypedSelectorHook(state => state.user.dogsChosen)
	const allBreeds = useTypedSelectorHook(state => state.user.allBreeds)

	const breedOptions =
		allBreeds && allBreeds.message
			? Object.keys(allBreeds.message)
			: ["this", "empty"]

	const filteredOptions = breedOptions.filter(el =>
		el.toLowerCase().includes(chosenBreed.toLowerCase())
	)

	const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChosenBreed(e.target.value)
	}

	const handleDivCLick = (el: string) => {
		setChosenBreed(el), searchDogs(el)
	}

	useEffect(() => {
		getAllBreeds()
	}, [getAllBreeds])

	console.log("chosenBreed", chosenBreed)
	return (
		<div className="flex flex-col  w-[500px] h-[600px] border gap-4 borde bg-slate-600 border-white p-16">
			<Header/>
			<div className="w-96 relative">
				<input
					onFocus={() => setShowBreeds(true)}
					onBlur={() =>
						setTimeout(() => {
							setShowBreeds(false)
						}, 200)
					}
					className="w-full p-2 rounded-md"
					type="search"
					value={chosenBreed}
					placeholder="Иттин тукумун издөө"
					onChange={handleInputOnChange}
				/>
				{showBreeds && (
					<div className="w-full max-h-96 flex flex-col gap-2 bg-gray-400 rounded-md overflow-auto absolute">
						{filteredOptions.map((el, idx) => (
							<div
								className="w-full transition-all duration-250 rounded-md p-1 hover:bg-slate-200 hover:text-black"
								key={idx}
								onClick={() => {
									handleDivCLick(el)
								}}
							>
								{el}
							</div>
						))}
					</div>
				)}
			</div>
			<button
				onClick={() => searchDogs(chosenBreed)}
				className="bg-orange-500 h-10 transition-all hover:scale-105 text-white font-bold py-2 px-4 rounded"
			>
				Башка сүрөт
			</button>
			<img
				className="w-96 h-96 grid place-items-center"
				src={dogsChosen.message}
				alt="Иттин тукумун танда"
			/>
		</div>
	)
}
