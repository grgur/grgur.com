import * as React from "react"

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2
            id="about"
            className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Grgur Grisogono
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Building, breaking, fixing, learning, sharing.
          </p>
        </div>

        <div className="px-4 py-5 sm:p-6">
          Every amazing digital product I contributed to started as Mission
          Impossible. Now I help other JavaScript developers, architects and
          team leaders be the heroes. They deserve it!
        </div>
      </div>
    </div>
  )
}

export default About
