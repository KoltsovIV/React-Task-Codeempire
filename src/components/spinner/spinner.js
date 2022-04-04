import React from "react";

function Spinner() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: "auto" }}
            width="200"
            height="200"
            display="block"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 100 100"
        >
            <rect width="6" height="5" x="47" y="32.5" fill="#FDE64B" rx="3" ry="2.5">
                <animate
                    attributeName="opacity"
                    begin="-0.9s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="5"
                x="47"
                y="32.5"
                fill="#FDE64B"
                rx="3"
                ry="2.5"
                transform="rotate(36 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.8s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="5"
                x="47"
                y="32.5"
                fill="#FDE64B"
                rx="3"
                ry="2.5"
                transform="rotate(72 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.7s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="5"
                x="47"
                y="32.5"
                fill="#FDE64B"
                rx="3"
                ry="2.5"
                transform="rotate(108 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.6s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="5"
                x="47"
                y="32.5"
                fill="#FDE64B"
                rx="3"
                ry="2.5"
                transform="rotate(144 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.5s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="5"
                x="47"
                y="32.5"
                fill="#FDE64B"
                rx="3"
                ry="2.5"
                transform="rotate(180 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.4s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="5"
                x="47"
                y="32.5"
                fill="#FDE64B"
                rx="3"
                ry="2.5"
                transform="rotate(216 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.3s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="5"
                x="47"
                y="32.5"
                fill="#FDE64B"
                rx="3"
                ry="2.5"
                transform="rotate(252 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.2s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="5"
                x="47"
                y="32.5"
                fill="#FDE64B"
                rx="3"
                ry="2.5"
                transform="rotate(288 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.1s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="5"
                x="47"
                y="32.5"
                fill="#FDE64B"
                rx="3"
                ry="2.5"
                transform="rotate(324 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="0s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
        </svg>
    );
}

export default Spinner;
