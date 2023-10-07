import React from 'react'
import VideoContainer from '../components/VideoContainer/VideoContainer'

const musicVideoIds = [["HTXG2Xy0dsU", "Evolution of Rock"], 
                        ["uNGU8aEVJo0", "Foo Fighters - Pretender (Drum Cover)"], 
                        ["ctvOzJLhX4g", "Davie504 - guitar contribution"]]; 
                    
export default function MusicVideoPage() {
    return (
    <div>
        <h1 className="container-header">Music videos </h1>
        <VideoContainer embedIds={musicVideoIds} />
    </div>
    )
}