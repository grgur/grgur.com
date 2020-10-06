import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import VideoCard, { Video } from "./video-card"

export interface VideosProps {}

const Videos: React.SFC<VideosProps> = () => {
  const data = useStaticQuery(graphql`
    query VideosQuery {
      allYoutubeVideo(filter: { description: { regex: "/grgur/gi" } }) {
        edges {
          node {
            videoId
            title
            description
            thumbnail {
              url
            }
            publishedAt
            privacyStatus
            tags
            contentDetails {
              duration
            }
          }
        }
      }
    }
  `)

  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2
            id="youtube"
            className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Recent YouTube Videos
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            My video content is all about the web stack, developer productivity,
            and teamwork. I try to solve real problems based on the actual
            solutions inspired from my work with some of the greatest companies
            on Earth.
          </p>
        </div>
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {data.allYoutubeVideo.edges
            .slice(0, 9) // just 9 is enough
            .map(({ node: video }: { node: Video }) => (
              <VideoCard video={video} key={video.videoId} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Videos
