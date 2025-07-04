import { render, screen } from "@testing-library/react"; 
import '@testing-library/jest-dom';
import Navigation from './Navigation';


describe('Navigation Component', () => {
    test('Render navigation main component', () => {
        render(<Navigation />);
        // const allLinks = screen.getAllByRole('link');
        // console.log('All links found: ', allLinks.map(link => ({
        //     text: link.textContent,
        //     href: link.getAttribute('href')
        // })));

        const navbar = screen.getByTestId('navbar');
        expect(navbar).toBeInTheDocument();
    })

    test('Display all navigations', () => {
        render(<Navigation />);

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
        render(<Navigation />);
        
        const resumeButtons = screen.getAllByRole('link', { name: /my resume/i});

        resumeButtons.forEach(button => {
            expect(button).toBeInTheDocument();
            expect(button).toHaveAttribute('href', '/images/resume/resume.pdf');
            expect(button).toHaveAttribute('download', 'Resume-Marasigan_John_Patrick.pdf');
        })
    })

    test('Renders arrow icon in Resume button', () => {
        render(<Navigation />);
        
        const arrowIcon = screen.getByAltText('Arrow Icon');

        expect(arrowIcon).toBeInTheDocument();
        expect(arrowIcon).toHaveAttribute('src', '/images/assets/arrow-icon.svg');
    })
})