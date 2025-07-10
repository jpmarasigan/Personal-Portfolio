import React, { useEffect } from 'react';
import '../styles/VideoModal.css';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoSrc: string;
    title: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoSrc, title }) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape')
                onClose();
        }
        
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <div className="video-modal-overlay" onClick={handleOverlayClick}>
            <div className="video-modal-container">
                <div className="video-modal-header">
                    <h3>{title} - Demo</h3>
                    <button className="close-button" onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className="video-modal-content">
                    <video
                        controls
                        autoPlay
                        preload="metadata"
                        className="demo-container"
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;