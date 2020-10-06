import * as React from "react"

export interface TestimonialsProps {}

const QUOTES = [
  "He always asks questions. Sometimes I just want to doze off, but Grgur keeps me on my toes. Bastard!",
  "You can tell that Grgur enjoys leaving PR comments. I always learn something. Notice that he's not always right so be prepared to challenge him. It's fair that Grgur learns, too.",
  "Grgur's hair is distractingly curly. Like velcro curly.",
  "Is that a devleoper? Is that a scrum master? Is that a product owner? No, it's Grgur and he knows how to optimize each role.",
  "When Grgur stops the conversation to tell me about how human brain deals with information, the Amygdala, the Neocortext and all that stuff - I just want to puke! It does give meaning to what we do, tho.",
  "I call him Mr. Millisecond. Not just because I'm his wife, but also because he's always on the mission to improve web performance.",
]

const Testimonial = ({ quote = "" }) => (
  <section className="overflow-hidden bg-white">
    <div className="relative max-w-screen-xl px-4 pt-20 pb-12 mx-auto sm:px-6 lg:px-8 lg:py-10">
      <div className="relative lg:flex lg:items-center">
        <div className="relative lg:ml-10">
          <svg
            className="absolute top-0 left-0 w-24 h-24 text-indigo-200 transform -translate-x-8 -translate-y-12 opacity-50"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 144 144"
          >
            <path
              strokeWidth="2"
              d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
            />
          </svg>
          <blockquote className="relative">
            <div className="font-medium leading-9 text-gray-900 lg:text-xl">
              <p>{quote}</p>
            </div>
            {/* <footer className="mt-8">
              <div className="flex">
                <div className="ml-4 lg:ml-0">
                  <div className="text-base font-medium leading-6 text-gray-900">
                    Grgur de Grisogono
                  </div>
                  <div className="text-base font-medium leading-6 text-indigo-600">
                    @ggrgur
                  </div>
                </div>
              </div>
            </footer> */}
          </blockquote>
        </div>
      </div>
    </div>
  </section>
)

const Testimonials: React.SFC<TestimonialsProps> = () => {
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
            What is it like to work with Grgur?
          </h2>
          <div className="py-12 bg-white">
            <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                {QUOTES.map((quote, idx) => (
                  <Testimonial key={idx} quote={quote} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
