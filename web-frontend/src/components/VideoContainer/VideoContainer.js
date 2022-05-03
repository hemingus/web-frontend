import React from "react"
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed"
import "./VideoContainer.css"

const VideoContainer = ({ embedIds }) => {
  return (
    <div className="video-container">
      {embedIds.map(embedId => ( <div className="video-elements"><YoutubeEmbed embedId={embedId}/></div>))}
    </div>
  )
  }

export default VideoContainer