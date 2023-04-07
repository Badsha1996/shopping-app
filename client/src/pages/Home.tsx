import { useQuery } from "@tanstack/react-query"
import { getItemsData } from "../api/Api"
import Items from "../components/Items"
import Slider from "../components/Slider"

function Home() {
  const {
    status,
    error, data: items
  } = useQuery({
    queryKey: ["items"],
    queryFn: getItemsData
  })

  if (status === "error") return <>{JSON.stringify(error)}</>

  return (
    <div >
      <Slider />
      {
        status === "loading" ? (
          <>
            <div className="border w-screen shadow rounded-md p-4 max-w-sm mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-400 h-12 w-12"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-4 bg-slate-400 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-4 bg-slate-400 rounded col-span-2"></div>
                      <div className="h-4 bg-slate-400 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

          </>) : (
          <>
            <Items items={items} />
          </>
        )
      }

    </div>
  )
}

export default Home