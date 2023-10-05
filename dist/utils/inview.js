let intersectionObserver;
function ensureIntersectionObserver(threshold) {
    if (intersectionObserver)
        return;
    intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            //const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport'
            //entry.target.dispatchEvent(new CustomEvent(eventName))
            if (entry.isIntersecting) {
                const element = entry.target;
                element.style.opacity = "1";
                element.style.transform = "";
            }
        });
    }, { threshold: threshold });
}
export default function inview(element, options) {
    let { direction, distance, opacity, threshold, transition } = {
        direction: "up",
        opacity: "0",
        threshold: 0,
        transition: 0.5,
        distance: 20
    };
    if (options) {
        if (options.direction) {
            direction = options.direction;
        }
        if (options.distance) {
            distance = options.distance;
        }
        if (options.opacity) {
            opacity = options.opacity;
        }
        if (options.threshold) {
            threshold = options.threshold;
        }
        if (options.transition) {
            transition = options.transition;
        }
    }
    const directions = ((distance) => {
        return {
            "up": `translateY(${distance}px)`,
            "down": `translateY(-${distance}px)`,
            "left": `translateX(${distance}px)`,
            "right": `translateX(-${distance}px)`,
        };
    })(distance);
    ensureIntersectionObserver(threshold);
    if (intersectionObserver) {
        intersectionObserver.observe(element);
        element.style.opacity = opacity;
        element.style.transform = directions[direction];
        element.style.transition = `${transition}s`;
    }
    return {
        destroy() {
            if (intersectionObserver) {
                intersectionObserver.unobserve(element);
            }
        }
    };
}
export function createInview() {
    let intersectionObserver;
    function ensureIntersectionObserver(threshold) {
        if (intersectionObserver)
            return;
        intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.style.opacity = "1";
                    element.style.transform = "";
                }
            });
        }, { threshold: threshold });
    }
    return function inview(element, options) {
        let { direction, distance, opacity, threshold, transition } = {
            direction: "up",
            opacity: "0",
            threshold: 0,
            transition: 0.5,
            distance: 20
        };
        if (options) {
            if (options.direction) {
                direction = options.direction;
            }
            if (options.distance) {
                distance = options.distance;
            }
            if (options.opacity) {
                opacity = options.opacity;
            }
            if (options.threshold) {
                threshold = options.threshold;
            }
            if (options.transition) {
                transition = options.transition;
            }
        }
        const directions = ((distance) => {
            return {
                "up": `translateY(${distance}px)`,
                "down": `translateY(-${distance}px)`,
                "left": `translateX(${distance}px)`,
                "right": `translateX(-${distance}px)`,
            };
        })(distance);
        ensureIntersectionObserver(threshold);
        if (intersectionObserver) {
            intersectionObserver.observe(element);
            element.style.opacity = opacity;
            element.style.transform = directions[direction];
            element.style.transition = `${transition}s`;
        }
        return {
            destroy() {
                if (intersectionObserver) {
                    intersectionObserver.unobserve(element);
                }
            }
        };
    };
}
