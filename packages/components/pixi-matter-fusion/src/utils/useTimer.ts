import { useContext, useEffect, useMemo, useState } from "react";
import { GameContext } from "../game-context";
import { GameStatus } from "../types";

export const useTimer = () => {
    const { status, startTime, endTime, timeout } = useContext(GameContext);

    const [{ seconds, minutes, timeLeft, timeLeftPercents }, setTimer] = useState({
        seconds: 0,
        minutes: 0,
        timeLeft: 0,
        timeLeftPercents: 0
    });

    useEffect(() => {
        if (timeout === 0) {
            setTimer({ minutes: 0, seconds: 0, timeLeft: 0, timeLeftPercents: 0 });
        } else {
            setTimer({ minutes: Math.floor(timeout / 60), seconds: timeout % 60, timeLeft: 1, timeLeftPercents: 1 });
        }
    }, [timeout, startTime]);

    const computeTimer = (localEndTime: number | null = null) => {
        const timeSpent = Math.round(((localEndTime || Date.now()) - (startTime || 0)) / 1000);
        if (timeout === 0) {
            setTimer({
                seconds: timeSpent % 60,
                minutes: Math.floor(timeSpent / 60),
                timeLeft: 0,
                timeLeftPercents: 0
            });
        } else {
            setTimer({
                seconds: (timeout - timeSpent) % 60,
                minutes: Math.floor((timeout - timeSpent) / 60),
                timeLeft: timeout - timeSpent,
                timeLeftPercents: (timeout - timeSpent) / timeout
            });
        }
    };

    useEffect(() => {
        if (status !== GameStatus.IN_PROGRESS) {
            if (endTime) {
                computeTimer(endTime);
            }
            return () => {};
        }

        const interval = setInterval(() => {
            computeTimer();
        }, 1000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [status, startTime, endTime, timeout]);

    return useMemo(
        () => ({ timeLeft, minutes, seconds, timeLeftPercents }),
        [timeLeft, minutes, seconds, timeLeftPercents]
    );
};
