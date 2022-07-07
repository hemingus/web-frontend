import React from 'react'
import Header from '../components/Header/Header';
import InteractiveLogo from '../components/InteractiveLogo/InteractiveLogo';
import MainMenu from '../components/MainMenu/MainMenu';
import ShufflingImage from '../components/imageComponents/ShufflingImage';
import CommentField from '../components/CommentField/CommentField';
import Footer from '../components/Footer/Footer';
import GuitarTuner from '../components/GuitarTuner/GuitarTuner';

const images = ["gulkins1.jpg", "gulkins2.jpg", "hemingdrums.jpg"];

export default function HomePage() {
    return (
        <div>
            <Header />
            <MainMenu />
            <InteractiveLogo logoId="heminglogo.png" />
            <GuitarTuner />
            <ShufflingImage imageList={images} />
            <CommentField />
            <Footer />
        </div>
    )
}