import { render, screen } from "@testing-library/react";
import Footer from './Footer';
// import { describe, expect } from "vitest";

describe("testing the footer for 4 texts", () => {
    it('render the footer component', () => {
        render(<Footer />);

        expect(screen.getByTest("Terms & Conditions")).toBeInTheDocument();
        expect(screen.getByTest("Cookie Policy")).toBeInTheDocument();
        expect(screen.getByTest("Privacy Policy")).toBeInTheDocument();
        expect(screen.getByTest("About Us")).toBeInTheDocument();
    })
});
