import React from "react";
import classnames from "classnames";

export type TimerCircleStyle = {
    defaultColor?: string;
    colorFrom?: string;
    colorTo?: string;
};

const DEFAULT_SEARCH_TIMER_CIRCLE_STYLE: TimerCircleStyle = {
    defaultColor: "rgba(17, 17, 17, 0.20)",
    colorFrom: "#67B747",
    colorTo: "#C54555"
};

export type TimerProps = {
    classNames?: string;
    circleStyle?: TimerCircleStyle;
    seconds: number;
    minutes: number;
    timeLeftPercents: number;
};

export const Timer: React.FC<TimerProps> = ({
    classNames,
    circleStyle = DEFAULT_SEARCH_TIMER_CIRCLE_STYLE,
    seconds,
    minutes,
    timeLeftPercents
}) => {
    const mergedCircleStyle = { ...DEFAULT_SEARCH_TIMER_CIRCLE_STYLE, ...circleStyle };

    return (
        <div
            data-testid="testid-game-control-timer"
            className={classnames("box-border", "justify-center", "grid", "self-center", classNames)}
            style={{
                fontSize: 18,
                fontWeight: 700,
                fontFamily: "ubuntu mono, consolas, monaco, monospace"
            }}
        >
            <svg viewBox="-50 -50 100 100" strokeWidth="10" style={{ gridColumn: 1, gridRow: 1 }}>
                <circle r="45" fill="none" stroke={mergedCircleStyle.defaultColor} />
                {timeLeftPercents && (
                    <circle
                        r="45"
                        pathLength="1"
                        fill="none"
                        strokeLinecap="round"
                        stroke={`color-mix(in hsl shorter hue, ${mergedCircleStyle.colorFrom} ${
                            timeLeftPercents * 100
                        }%, ${mergedCircleStyle.colorTo})`}
                        strokeDasharray={`${timeLeftPercents} 1`}
                    />
                )}
            </svg>
            <div style={{ gridColumn: 1, gridRow: 1, placeSelf: "center", padding: 20 }}>
                <span>
                    {minutes < 10 && "0"}
                    {minutes}
                </span>
                :
                <span>
                    {seconds < 10 && "0"}
                    {seconds}
                </span>
            </div>
        </div>
    );
};
