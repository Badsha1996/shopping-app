import {render, screen} from "@testing-library/react"
import App from "./App"

it("should have render" , ()=>{
    render(<App/>)
    const m = screen.queryByText(/render success/i)
    expect(m).toBeDefined()
})