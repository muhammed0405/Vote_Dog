/** @format */

import { FC } from "react"
import { useTypedSelectorHook } from "../../Redux/customHooks/useTypedSelectorHook"
import Header from "../../components/Header"

export const LikedDogs: FC = () => {
	const likedDogs = useTypedSelectorHook(state => state.user.likedDogs)
	return (
		<div className="flex flex-col border bg-slate-600 border-white p-4 sm:p-8 md:p-16 w-full max-w-screen-lg mx-auto">
  <Header />
  <div className="grid w-full place-items-center overflow-auto">
    {likedDogs.length > 0 ? (
      <div className="w-full overflow-auto flex flex-wrap justify-center gap-3 p-4">
        {likedDogs.map((el, index) => (
          <img key={index} className="w-28 h-28 object-cover" src={el} alt={`Liked dog ${index}`} />
        ))}
      </div>
    ) : (
      <h1 className="text-xl text-white text-center mt-10">Сизде жактырган иттер тизмеси бош</h1>
    )}
  </div>
</div>

	)
}
