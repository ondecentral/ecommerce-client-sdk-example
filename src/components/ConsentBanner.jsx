import React, { useState } from "react";

const ConsentBanner = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(true)
    return (
        isBannerVisible && (
        <div className='consent-banner position-sticky bottom-0 flex align-items-center justify-content-center bg-blue'>
            <p>Do you consent to us using your data for analytics?</p>
            <button className="btn btn-outline-light bg-black" onClick={() => setIsBannerVisible(false)}>Accept</button>
            <button className="btn btn-outline-light bg-black" onClick={() => setIsBannerVisible(false)}>Reject</button>
        </div>
        )
    )   
}

export default ConsentBanner;