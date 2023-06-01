import React from 'react'
import VideoContainer from '../components/VideoContainer/VideoContainer'

const musicVideoIds = [["HTXG2Xy0dsU", "Evolution of Rock"], 
                        ["uNGU8aEVJo0", "Foo Fighters - Pretender (Drum Cover)"], 
                        ["ctvOzJLhX4g", "Davie504 - guitar contribution"]]; 
                    
const appVideoIds = [["DriJqf5RDlM", "Poker-app"]];

export default function VideoPage() {
    return (
    <div>
        <h1 className="container-header">Music videos </h1>
        <VideoContainer embedIds={musicVideoIds} />
        <h1 className="container-header">App videos</h1>
        <VideoContainer embedIds={appVideoIds} />
    </div>
    )
}