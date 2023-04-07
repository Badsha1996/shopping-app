import Item from "./Item";

export default function Items({ items }: { items: Array<unknown> }) {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl text-white bg-black/70 py-2 w-80 text-center">Shopping Events</h1>
        <span className="w-28 h-[0.3rem] bg-black"></span>
        <p className="max-w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti numquam nostrum aperiam cupiditate odit dolores mollitia voluptates esse facilis.</p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid-cols-2
      grid sm:grid-cols-3 gap-10 md:grid-cols-4">
        {
          items.map((item: any, key: number) => {
            return (
              <div key={key}>
                <Item item ={item}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
