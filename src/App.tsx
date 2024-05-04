/** @format */

import { NavLink, Route, Routes } from "react-router-dom"
import "./App.css"
import ChooseBreed from "./Pages/ChooseBreed/ChooseBreed"
import { LikedDogs } from "./Pages/LikedDogs/LikedDogs"
import RandomImg from "./Pages/RandomImg/RandomImg"

function App() {
	return (
		<div className="flex gap-4 sm:gap-10 flex-wrap justify-center p-2 sm:p-1">
			<div className="  p-3 max-w-[400px] sm:w-[400px] ">
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

				<NavLink to="/random">
					<button className="bg-orange-500 rounded-md p-2 mt-3">
						Добуш берүү
					</button>
				</NavLink>

				<div className="mt-10">
					<h1 className="text-blue-300 text-lg font-bold my-4">
						Өткөн айдын башкы жеңүүчүсү
					</h1>
					<img
						className="w-80 h-80"
						src={
							"https://www.southernliving.com/thmb/v8EFGYRSkAAe-zXB--IhmJ7q_1w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-73032606-2000-4d0c5295b45140d285a98ffb7d5519f5.jpg"
						}
						alt=""
					/>
				</div>
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
