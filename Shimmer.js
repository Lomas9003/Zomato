import React from 'react'

const Shimmer = () => {
    return (
        <div className="shimmer-container">
            <div className="shimmer-header"></div>
            <div className="shimmer-search"></div>
            <div className="shimmer-list">
                {[...Array(20)].map((_, index) => (
                    <div key={index} className="shimmer-card"></div>
                ))}
            </div>
        </div>
    );
};

export default Shimmer