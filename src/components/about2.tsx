import * as React from "react"

export interface AboutProps {}

// https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
const About: React.FC<AboutProps> = () => (
  <div className="overflow-hidden bg-white">
    <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="absolute top-0 bottom-0 hidden w-screen lg:block bg-gray-50 left-3/4"></div>
      <div className="mx-auto text-base max-w-prose lg:max-w-none">
        <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Meet Grgur Grisogono
        </h1>
        <p className="mb-8 text-sm font-semibold leading-6 tracking-wide text-indigo-600 uppercase">
          Building, breaking, fixing, learning, sharing.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-3">
          <svg
            className="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
            />
          </svg>
          <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
            <figure>
              <div className="relative pb-7/12 lg:pb-0">
                <img
                  src="https://res.cloudinary.com/grguru/image/upload/c_fill,e_art:incognito,f_auto,w_592,h_688,g_face/v1593166618/grgur/burger-600px.jpg"
                  alt="Grgur Grisogono"
                  width="592"
                  height="688"
                  className="absolute inset-0 object-cover object-center w-full h-full rounded-lg shadow-lg lg:static lg:h-auto"
                />
              </div>
              <figcaption className="flex mt-3 text-sm text-gray-500">
                <svg
                  className="flex-none w-5 h-5 mr-2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Photograph by Andrea Grisogono
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            <p className="mb-5 text-lg leading-7 text-gray-500">
              Every amazing digital product I contributed to started as Mission
              Impossible. Now I help other JavaScript developers, architects and
              team leaders be the heroes. They deserve it!
            </p>
          </div>
          <div className="mx-auto prose text-gray-500 lg:max-w-none lg:row-start-1 lg:col-start-1">
            <p>
              Throughout my career I helped Global Fortune 500 companies,
              startups, and governments be the heroes to their users. People
              enjoy the experience of ordering their favorite food. They
              appreciate being able to buy designer clothes with just a few
              interactions. They drive cars in a safer and more enjoyable
              manner. They grow businesses faster. They capture more revenue by
              improving conversion rates.
            </p>
            <p>
              I owe it to the communities that helped me grow into a strong
              leader. That's why I believe in giving back. Help me in the
              mission to educate, contribute, solve problems, and sponsor our
              favorite tech communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
