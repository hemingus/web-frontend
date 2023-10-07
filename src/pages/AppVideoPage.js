import React from 'react'
import VideoContainer from '../components/VideoContainer/VideoContainer'

const appVideoIds = [["DriJqf5RDlM", "Poker-app"]];

export default function AppVideoPage() {
    return (
    <div>
        <h1 className="container-header">App videos</h1>
        <VideoContainer embedIds={appVideoIds} />
    </div>
    )
}