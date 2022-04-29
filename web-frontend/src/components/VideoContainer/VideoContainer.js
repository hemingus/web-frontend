import React from "react"
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed"
import "./VideoContainer.css"

const VideoContainer = ({ embedIds }) => {
  return (
    <div className="video-container">
      {embedIds.map(embedId => ( <YoutubeEmbed embedId={embedId}/>))}
    </div>
  )
  }

export default VideoContainer