import React, { JSXElementConstructor } from "react";

type TypographyComponent = React.PropsWithChildren & { className: string; style?: React.CSSProperties };
type TypographyVariant = "heading-1" | "heading-2" | "heading-3" | "heading-4" | "body-1" | "body-2" | "body-3";
export type TypographyProps = React.PropsWithChildren & {
    Component?: string | JSXElementConstructor<TypographyComponent>;
    variant?: TypographyVariant;
    className?: string;
    style?: React.CSSProperties;
};

const VARIANT_COMPONENT_MAPPING = new Map<TypographyVariant, string | JSXElementConstructor<TypographyComponent>>([
    ["heading-1", "h1"],
    ["heading-2", "h2"],
    ["heading-3", "h3"],
    ["heading-4", "h4"],
    ["body-1", "p"],
    ["body-2", "p"],
    ["body-3", "p"]
]);

export const Typography: React.FC<TypographyProps> = ({
    Component,
    variant = "body-1",
    className = "",
    children,
    style
}) => {
    const InternalComponent: string | JSXElementConstructor<TypographyComponent> =
        Component || VARIANT_COMPONENT_MAPPING.get(variant) || "div";
    return (
        <InternalComponent className={`${variant} ${className}`} style={style}>
            {children}
        </InternalComponent>
    );
};
