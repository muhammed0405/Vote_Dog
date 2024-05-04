/** @format */

import { Route, Routes } from "react-router-dom"
import "./App.css"
import ChooseBreed from "./Pages/ChooseBreed/ChooseBreed"
import { LikedDogs } from "./Pages/LikedDogs/LikedDogs"
import RandomImg from "./Pages/RandomImg/RandomImg"

function App() {
	return (
		<div className="flex gap-10">
			<div className="w-[400px]">
				<h1 className="text-lg font-bold text-blue-300 ">
					Иттердин Жылдызына Добуш Бериңиз!
				</h1>
				<p className="my-4">
					Сиздин добушуңуз менен айдын эң сүйүктүү итин тандайбыз!
				</p>
				<p>
					Добуш берүү айдын аягына чейин уланат. Айдын аягында эң көп добуш
					топтогон ит "Айдын Мыкты Ити" наамына ээ болот жана атайын сертификат
					менен сыйлыктарга ээ болот.
				</p>
			</div>

			<div className="">
				<Routes>
					<Route path="/choose" element={<ChooseBreed />} />
					<Route path="/random" element={<RandomImg />} />
					<Route path="/liked_dogs" element={<LikedDogs />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
