import { animate, inView, stagger } from "motion";
export function setupAnimations() {
    if (window === undefined) {
        return console.log("not windows");
    }
    document.querySelectorAll("#to-up").forEach((element) => {
        inView(element, () => {
            animate(element, { y: [50, 0], opacity: [0, 0.5, 1] }, {
                delay: stagger(0.1),
                duration: 2,
                easing: [0.22, 0.03, 0.28, 1],
            });
        });
    });
    document.querySelectorAll("#to-up-delay").forEach((element) => {
        inView(element, () => {
            animate(element, { y: [70, 0], opacity: [0, 0.5, 1] }, {
                delay: stagger(1),
                duration: 3.5,
                easing: [0.22, 0.03, 0.28, 1],
            });
        });
    });
    document.querySelectorAll("#to-left").forEach((element) => {
        inView(element, () => {
            animate(element, { x: [200, 0], opacity: [0, 0.5, 1] }, {
                delay: stagger(0.1),
                duration: 3,
                easing: [0.22, 0.03, 0.26, 1],
            });
        }, { margin: "0px 0px -150px 0px" });
    });
    document.querySelectorAll("#to-left-delay").forEach((element) => {
        inView(element, () => {
            animate(element, { x: [200, 0], opacity: [0, 0.5, 1] }, {
                delay: stagger(0.1),
                duration: 3.5,
                easing: [0.22, 0.03, 0.26, 1],
            });
        }, { margin: "0px 0px -150px 0px" });
    });
    document.querySelectorAll("#to-right").forEach((element) => {
        inView(element, () => {
            animate(element, { x: [-200, 0], opacity: [0, 0.5, 1] }, {
                delay: stagger(0.1),
                duration: 3,
                easing: [0.22, 0.15, 0.28, 1],
            });
        }, { margin: "0px 0px -150px 0px" });
    });
    document.querySelectorAll("#to-right-delay").forEach((element) => {
        inView(element, () => {
            animate(element, { x: [-250, 0], opacity: [0, 0.5, 1] }, {
                delay: stagger(0.1),
                duration: 3.5,
                easing: [0.22, 0.15, 0.28, 1],
            });
        }, { margin: "0px 0px -150px 0px" });
    });
    document.querySelectorAll("#from-bot").forEach((element) => {
        inView(element, () => {
            animate(element, { transform: "none", opacity: [0, 0.5, 1] }, { duration: 3.5 });
        }, { margin: "0px 100px 0px 0px" });
    });
}
