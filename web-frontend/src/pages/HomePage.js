import React from 'react'
import Header from '../components/Header/Header';
import InteractiveLogo from '../components/InteractiveLogo/InteractiveLogo';
import MainMenu from '../components/MainMenu/MainMenu';
import ShufflingImage from '../components/imageComponents/ShufflingImage';
import CommentField from '../components/CommentField/CommentField';
import Footer from '../components/Footer/Footer';

const images = ["gulkins1.jpg", "gulkins2.jpg", "hemingdrums.jpg"];

export default function HomePage() {
    return (
        <div>
            <Header />
            <InteractiveLogo logoId="heminglogo.png" />
            <MainMenu />
            <ShufflingImage imageList={images} />
            <CommentField />
            <Footer />
        </div>
    )
}