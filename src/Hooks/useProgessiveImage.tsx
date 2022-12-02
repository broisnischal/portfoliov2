import React from 'react';

const useProgessiveImage = (lowQualitySrc: any, highQualitySrc: any) => {
    const [src, setSrc] = React.useState(lowQualitySrc);

    React.useEffect(() => {
        setSrc(lowQualitySrc);

        const img = new Image();
        img.src = highQualitySrc;

        img.onload = () => {
            setSrc(highQualitySrc);
        };
    }, [lowQualitySrc, highQualitySrc]);

    return [src, { blur: src === lowQualitySrc }];
};

export default useProgessiveImage;
