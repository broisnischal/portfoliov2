import { useEffect, useState } from 'react';

const useIntersecting = (
    ref: any,
    title: string,
    defaultTitle = 'Nischal Dahal | neeswebservice',
) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setVisible(entry.isIntersecting);
            },
            {
                threshold: 1,
            },
        );

        observer.observe(ref.current);

        if (visible) {
            document.title = title;
        } else {
            document.title = defaultTitle;
        }
    }, [ref, visible]);
};

export default useIntersecting;
