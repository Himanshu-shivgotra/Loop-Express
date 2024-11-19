import { useState, useEffect } from "react";

const useStickyNavbar = (threshold = 50) => {
    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > threshold) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [threshold]);

    return isFixed;
};

export default useStickyNavbar;
