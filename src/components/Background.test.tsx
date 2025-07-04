import { render, screen } from "@testing-library/react"; 
import '@testing-library/jest-dom';
import Background from './Background';


const minNumOfCircles = 4;

describe('Background Component', () => {
    test('Display background', () => {
        const { container } = render(<Background />);

        const bgContainer = container.querySelector('.animated-background');
        const bgCircles = container.querySelectorAll('.circles');

        expect(bgContainer).toBeInTheDocument();
        expect(bgCircles.length).toBeGreaterThanOrEqual(minNumOfCircles);
        
        bgCircles.forEach(circle => {
            expect(circle).toBeInTheDocument();
        })
    })
})