import { render, screen } from "@testing-library/react"; 
import '@testing-library/jest-dom';
import Hamburger from './Hamburger';

describe('Hamburger Component', () => {
    const defaultProps = {
        isVisible: true,
        scrolling: false,
        lastScrollY: 0,
        setScrolling: jest.fn(),
        setLastScrollY: jest.fn(),
    }

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Render hamburger component with default props', () => {
        render(<Hamburger {...defaultProps} />);

        const hamburgerContainer = screen.getByTestId('hamburger');
        const hamburgerIcon = screen.getByTestId('hamburger-icon');
        
        expect(hamburgerContainer).toBeInTheDocument();
        expect(hamburgerIcon).toBeInTheDocument();
    })

    test('Display all navigations', () => {
        render(<Hamburger {...defaultProps} />);

        const sections = ['home', 'services', 'portfolio', 'skills', 'contact'];

        sections.forEach(section => {
            const links = screen.getAllByRole('link', { hidden: false, name: new RegExp(section, 'i') });
            expect(links.length).toBeGreaterThan(0);

            // Test each link has correct href and is in document
            links.forEach(link => {
                expect(link).toBeInTheDocument();
                expect(link).toHaveAttribute('href', `#${section}`)
            })
        })
    })

    test('Display Resume download button', () => {
        render(<Hamburger {...defaultProps} />);

        const resumeButtons = screen.getAllByRole('link', { name: /my resume/i});

        resumeButtons.forEach(button => {
            expect(button).toBeInTheDocument();
            expect(button).toHaveAttribute('href', '/images/resume/resume.pdf');
            expect(button).toHaveAttribute('download', 'Resume-Marasigan_John_Patrick.pdf');
        })
    })
})