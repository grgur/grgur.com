import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import Header from "./header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders the title", () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId("title")).toHaveTextContent("GrgurdeGrisogono")
  })
})
