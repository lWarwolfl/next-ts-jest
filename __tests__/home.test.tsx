import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
	it('Should have "docs" in the text', () => {
		render(<Home />);
		const element = screen.getByText("Docs");
		expect(element).toBeInTheDocument();
	});
    
    it('Should have "information" in the text', () => {
		render(<Home />);
		const element = screen.getByText(/information/i);
		expect(element).toBeInTheDocument();
    });
    
    it('Should have a heading', () => {
		render(<Home />);
        const element = screen.getByRole("heading", {
			name: "Docs",
		});
		expect(element).toBeInTheDocument();
	});
});
