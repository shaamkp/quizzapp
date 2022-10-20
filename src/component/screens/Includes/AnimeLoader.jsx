import React from "react";
import loader from "./lotties/91199-quiz.json";
import Lottie from "react-lottie";

export default function AnimeLoader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,
        rendererSettings: {},
    };
    return (
        <Lottie options={defaultOptions} height={700} width={500} speed={6} />
    );
}
