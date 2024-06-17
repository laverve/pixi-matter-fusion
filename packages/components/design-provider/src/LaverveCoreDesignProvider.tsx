import React from "react";

import { NextUIProvider } from "@nextui-org/react";

import "./LaverveCoreDesignProvider.css";

export const LaverveCoreDesignProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <NextUIProvider>{children}</NextUIProvider>;
};
