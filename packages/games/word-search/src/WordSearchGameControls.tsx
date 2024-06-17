import React, { useContext } from "react";
import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { Typography } from "@laverve/design-provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

import { GameContext, GameStatus } from "@laverve/fusion";
import { I18N_NAMESPACE } from "./types";

export type WordSearchGameControlsProps = {
    classNames?: string;
    statsSlot?: React.ReactNode;
};

export const WordSearchGameControls: React.FC<WordSearchGameControlsProps> = ({
    statsSlot,
    classNames
}: WordSearchGameControlsProps) => {
    const { t } = useTranslation(I18N_NAMESPACE);
    const { start, status } = useContext(GameContext);

    const wrap = (children: React.ReactNode, isGameOver: boolean = false) => {
        return (
            <div
                className={classnames(
                    "flex",
                    "absolute",
                    "inset-0",
                    "items-center",
                    { "justify-between": isGameOver, "justify-center": !isGameOver },
                    "bg-content1/90",
                    "flex-col",
                    "text-foreground",
                    classNames || ""
                )}
            >
                {children}
            </div>
        );
    };

    if (status === GameStatus.READY) {
        return wrap(
            <Button type="button" color="primary" data-testid="testid-game-control-start" onClick={() => start()}>
                <FontAwesomeIcon icon={faPlay} /> {t("controls.startButton")}
            </Button>
        );
    }

    if (status !== GameStatus.IN_PROGRESS) {
        return wrap(
            <>
                <div className="pt-5 pb-5">
                    {status === GameStatus.COMPLETED && (
                        <>
                            <Typography variant="heading-2" className="text-center mb-3">
                                {t("controls.kudos.title")}
                                <br />
                                {t("controls.kudos.subtitle")}
                            </Typography>
                            <Typography variant="body-1" className="text-center">
                                {t("controls.kudos.motivationalMessage")}
                            </Typography>
                        </>
                    )}
                    {status === GameStatus.TIMEDOUT && (
                        <>
                            <Typography variant="heading-2" className="text-center mb-3">
                                {t("controls.timesup.title")}
                            </Typography>
                            <Typography variant="body-1" className="text-center">
                                {t("controls.timesup.subtitle")}
                                <br />
                                {t("controls.timesup.motivationalMessage")}
                            </Typography>
                        </>
                    )}
                    <div className="flex flex-col mt-3 mb-3">
                        <Typography variant="heading-4" className="text-center mb-3">
                            {t("controls.stats.title")}
                        </Typography>
                        {statsSlot}
                    </div>
                </div>
                <Button type="button" color="primary" onClick={() => start()}>
                    <FontAwesomeIcon icon={faArrowRotateLeft} /> {t("controls.playAgainButton")}
                </Button>
            </>,
            true
        );
    }
    return null;
};
