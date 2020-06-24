import * as React from "react"
import { string } from "prop-types"

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

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img
          className="object-cover w-full h-48"
          src={video.thumbnail?.url}
          alt={video.title}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <p className="text-sm font-medium leading-5 text-indigo-600">
            <a href="#" className="hover:underline">
              Blog
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
              <time dateTime="2020-03-16">Mar 16, 2020</time>
              <span className="mx-1">&middot;</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
