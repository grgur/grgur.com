import * as React from "react"

const YouTube = React.lazy(() => import("react-youtube"))

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    modestbranding: 1,
  },
}

export interface Video {
  videoId: string
  title: string
  description: string
  thumbnail: { url: string }
  publishedAt: string
  privacyStatus: string
}

export interface VideoCardProps {
  video: Video
}

const VideoCard: React.SFC<VideoCardProps> = ({ video }) => {
  const firstParagraphMatch = video.description.match(/^(.*)\n/)
  const firstParagraph =
    (Array.isArray(firstParagraphMatch) && firstParagraphMatch[1]) || null

  console.log(video)
  const date = new Intl.DateTimeFormat(navigator?.language || "en-US").format(
    new Date(video.publishedAt)
  )

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <React.Suspense
          fallback={
            <img
              className="object-cover w-full h-48"
              src={video.thumbnail?.url}
              alt={video.title}
            />
          }
        >
          <YouTube
            videoId={video.videoId}
            opts={opts}
            className="object-cover w-full h-48"
          />
        </React.Suspense>
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <p className="text-sm font-medium leading-5 text-indigo-600">
            <a href="#" className="hover:underline">
              Video
            </a>
          </p>
          <a href="#" className="block">
            <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
              {video.title}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">
              {firstParagraph}
            </p>
          </a>
        </div>
        <div className="flex items-center mt-6">
          <div className="flex-shrink-0">
            <a href="#">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium leading-5 text-gray-900">
              <a href="#" className="hover:underline">
                Grgur Grisogono
              </a>
            </p>
            <div className="flex text-sm leading-5 text-gray-500">
              <time dateTime={date}>{date}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
