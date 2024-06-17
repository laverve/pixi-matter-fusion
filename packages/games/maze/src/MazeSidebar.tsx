import React from "react";

import { useTimer } from "@laverve/pixi-matter-fusion";
import { Timer } from "@laverve/timer";

export const MazeSidebar: React.FC = () => {
    const { seconds, timeLeftPercents, minutes } = useTimer();

    return <Timer seconds={seconds} minutes={minutes} timeLeftPercents={timeLeftPercents} />;
};
