import { render, screen } from "@testing-library/react"; 
import '@testing-library/jest-dom';
import Background from './Background';


const minNumOfCircles = 4;

describe('Background Component', () => {
    test('Display background', () => {
        render(<Background />);

        const bgContainer = screen.getByTestId('background');
        const bgCircles = screen.getAllByTestId('circles');

        expect(bgContainer).toBeInTheDocument();
        expect(bgCircles.length).toBeGreaterThanOrEqual(minNumOfCircles);
        
        bgCircles.forEach(circle => {
            expect(circle).toBeInTheDocument();
        })
    })
})