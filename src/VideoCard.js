import React, { useRef, useState } from 'react';
import './VideoCard.css'
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({ channel, avatarSrc, song, url, likes, shares}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        } else {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    return (
        <div className="videocard">
            <VideoHeader />
            <video
                ref={videoRef}
                onClick={onVideoPress}
                className="videocard__player"
                src={url}
                alt="Instagram reels"
                loop={true}            
            >
            </video>
            <VideoFooter 
                channel={channel}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                song={song}
            />
        </div>
    )
}

export default VideoCard;