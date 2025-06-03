import React from "react";
import { useState, useEffect } from 'react';

export interface StatusModalProps {
    status: 'success' | 'error';
    message: string;
}

const StatusModal: React.FC<StatusModalProps> = ({ status, message }) => {
    const [isInvisible, setIsInvisible] = useState(false);
    const bgColor = status === 'success' ? 'bg-green-200' : 'bg-red-200';

    useEffect(() => {
        setIsInvisible(true);
        const timeout = setTimeout(() => {
            setIsInvisible(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [])

    return (
        <div className={`status-modal translate-x-0 ${bgColor} ${isInvisible ? 'translate-x-0' : 'translate-x-full'}`}>
            <p>{message}</p>
        </div>
    )
}

export default StatusModal