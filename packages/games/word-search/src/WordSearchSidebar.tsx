import React from "react";

import { Timer } from "@laverve/timer";
import { useTimer } from "@laverve/pixi-matter-fusion";
import { WordSearchWordsList, WordSearchWordsListProps } from "./WordSearchWordsList";

export type WordSearchSidebarProps = {
    wordsListConfig?: Pick<WordSearchWordsListProps, "classNames">;
};

export const WordSearchSidebar: React.FC<WordSearchSidebarProps> = ({ wordsListConfig }) => {
    const { seconds, timeLeftPercents, minutes } = useTimer();

    return (
        <>
            <Timer seconds={seconds} minutes={minutes} timeLeftPercents={timeLeftPercents} />
            <WordSearchWordsList classNames={wordsListConfig?.classNames ?? ""} />
        </>
    );
};
