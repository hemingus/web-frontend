import React from 'react'
import YoutubeEmbed from '../components/YoutubeEmbed/YoutubeEmbed'
import VideoContainer from '../components/VideoContainer/VideoContainer'

const embedIds = ["HTXG2Xy0dsU", "HTXG2Xy0dsU", "HTXG2Xy0dsU", "HTXG2Xy0dsU", "HTXG2Xy0dsU", "HTXG2Xy0dsU"];

export default function VideoPage() {
    return (
    <div>
        <YoutubeEmbed embedId="HTXG2Xy0dsU" />
        <VideoContainer embedIds={embedIds} />
    </div>
    )
}