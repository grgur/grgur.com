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

function YTDurationToSeconds(duration) {
  let match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)

  match = match.slice(1).map(function (x) {
    if (x != null) {
      return x.replace(/\D/, "")
    }
  })

  const hours = parseInt(match[0]) || 0
  const minutes = parseInt(match[1]) || 0
  const seconds = parseInt(match[2]) || 0

  return hours * 3600 + minutes * 60 + seconds
}

function forHumans(duration) {
  const seconds = YTDurationToSeconds(duration)
  const levels = [
    [Math.floor(seconds / 31536000), "years"],
    [Math.floor((seconds % 31536000) / 86400), "days"],
    [Math.floor(((seconds % 31536000) % 86400) / 3600), "hours"],
    [Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), "min"],
    [(((seconds % 31536000) % 86400) % 3600) % 60, "sec"],
  ]
  let returntext = ""

  for (let i = 0, max = levels.length; i < max; i++) {
    if (levels[i][0] === 0) continue
    returntext +=
      " " +
      levels[i][0] +
      " " +
      (levels[i][0] === 1
        ? levels[i][1].substr(0, levels[i][1].length - 1)
        : levels[i][1])
  }
  return returntext.trim()
}

const VideoCard: React.SFC<VideoCardProps> = ({ video }) => {
  const firstParagraphMatch = video.description.match(/^(.*)\n/)
  const firstParagraph =
    (Array.isArray(firstParagraphMatch) && firstParagraphMatch[1]) || null

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
            {video.tags
              .slice(0, 2)
              .map(tag => tag.charAt(0).toUpperCase() + tag.slice(1))
              .join(", ")}
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
                src="https://res.cloudinary.com/grguru/image/upload/c_fill,f_auto,g_face,h_80,q_auto,w_80/v1593166220/grgur/straight-hair.jpg"
                alt="Grgur Grisogono"
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
              <span className="mx-1">&middot;</span>
              <span>{forHumans(video.contentDetails.duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
