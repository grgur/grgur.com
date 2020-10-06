import * as React from "react"
// import { Link } from "gatsby"
import Transition from "./transition"

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  return (
    <header className="relative overflow-hidden bg-gray-50">
      <div
        className="hidden bg-fixed bg-right bg-no-repeat bg-contain sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full sm:bg-local md:bg-scroll lg:bg-local xl:bg-fixed"
        style={{
          // backgroundImage:
          // "url(https://res.cloudinary.com/grguru/image/upload/c_scale,e_art:incognito,f_auto,w_1024/v1594027693/grgur/IMG_2711.jpg)",
          // "url(https://res.cloudinary.com/grguru/image/upload/c_scale,e_art:incognito,f_auto,w_1024/v1593166618/grgur/J1920x1080-00355.jpg)",
          backgroundColor: "#0D0403",
        }}
      ></div>

      <div className="relative pt-2 pb-2 sm:pb-2 md:pb-4 lg:pb-4 xl:pb-4">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 md:hidden">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#" aria-label="Home">
                  {/* <img
                    className="rounded-full "
                    src="https://res.cloudinary.com/grguru/image/upload/c_fill,e_art:incognito,f_auto,w_512,h_512,g_face/v1593166618/grgur/burger-600px.jpg"
                    alt="Grgur Grisogono"
                  /> */}
                </a>
                <div className="flex items-center -mr-2 md:hidden">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                    id="main-menu"
                    aria-label="Main menu"
                    aria-haspopup="true"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="hidden md:block">
              <a
                href="#youtube"
                className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
              >
                Videos
              </a>
            </div> */}
          </nav>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
            <div className="rounded-lg shadow-md">
              <div
                className="overflow-hidden bg-white rounded-lg shadow-xs"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="w-auto h-8"
                      src="/img/logos/workflow-mark-on-white.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                      aria-label="Close menu"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  <a
                    href="#youtube"
                    className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    role="menuitem"
                  >
                    Videos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <main className="max-w-screen-xl px-4 mx-auto mt-2 sm:px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <img
              className="rounded-full"
              src="https://res.cloudinary.com/grguru/image/upload/c_fill,e_art:incognito,f_auto,w_512,h_512,g_face/v1593166618/grgur/burger-600px.jpg"
              alt="Grgur Grisogono"
            />
            <div className="text-center" data-testid="title">
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Grgur
                <br className="xl:hidden" />
                <span className="xl:ml-2" />
                <span className="text-indigo-600">de</span>
                <span className="xl:ml-2" />
                Grisogono
              </h2>
              <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                I'm an engineer with the brains of a scientist, consierge,
                parent, and the devil's advocate.
              </p>
            </div>
          </div>
        </main>
      </div>
    </header>
  )
}

export default Header
