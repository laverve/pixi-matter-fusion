import { describe, it, expect } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";
import { Typography, TypographyProps } from "./Typography";

describe("Typography", () => {
    it("renders with default props", () => {
        const component = renderer.create(<Typography>Test</Typography>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("supports custom component", () => {
        const component = renderer.create(<Typography Component="div">Test</Typography>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("supports a set of variants", () => {
        const variants: TypographyProps["variant"][] = [
            "heading-1",
            "heading-2",
            "heading-3",
            "heading-4",
            "body-1",
            "body-2",
            "body-3"
        ];
        variants.forEach((variant) => {
            const component = renderer.create(<Typography variant={variant}>Test</Typography>);
            expect(component.toJSON()).toMatchSnapshot();
        });
    });

    it("supports custom className", () => {
        const component = renderer.create(<Typography className="test-class-name">Test</Typography>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("supports custom styles", () => {
        const component = renderer.create(<Typography style={{ textDecoration: "underline" }}>Test</Typography>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
