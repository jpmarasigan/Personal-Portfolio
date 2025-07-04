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
        render(<Hamburger {...defaultProps} />);
    })

    test('Render hamburger component with default props', () => {
        const hamburgerContainer = document.querySelector('.hamburger-container');
        const navIcon = document.getElementById('nav-icon');
        
        expect(hamburgerContainer).toBeInTheDocument();
        expect(navIcon).toBeInTheDocument();
    })

    test('Display all navigations', () => {
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
        const resumeButtons = screen.getAllByRole('link', { name: /my resume/i});

        resumeButtons.forEach(button => {
            expect(button).toBeInTheDocument();
            expect(button).toHaveAttribute('href', '/images/resume/resume.pdf');
            expect(button).toHaveAttribute('download', 'Resume-Marasigan_John_Patrick.pdf');
        })
    })
})