import '../styles/Contact.css';
import Select, { StylesConfig, ControlProps, CSSObjectWithLabel } from 'react-select';
import StatusModal, { StatusModalProps } from '../components/StatusModal';
import emailjs from 'emailjs-com'
import { useState } from 'react';

const countryOptions = [
    { value: '+63', label: '🇵🇭 +63' },
    { value: '+1', label: '🇺🇸 +1' },
    { value: '+44', label: '🇬🇧 +44' },
];

const engagementSections = [
    {
        id: "personal-assistance",
        title: "Personal Assistance",
        description: "I’m here to help! Whether you have question about my studies and project, need assistance with a project, or just want to chat about ideas, feel free to reach out.",
    },
    {
        id: "ideas-and-opportunities",
        title: "Ideas and Opportunities",
        description: "Your input matters to me! If you have suggestions for collaborations, new project ideas, or ways I can improve my current skills and services, I’d love to hear from you.",
    },
    {
        id: "collaboration-requests",
        title: "Collaboration Requests",
        description: "Interested in working together on a project. Let us discuss how we can work together to bring your ideas to life. I’m open to new opportunities.",
    },
]

const ContactForm = () => {
    const [modal, setModal] = useState<StatusModalProps | null>(null);

    const customStyles: StylesConfig = {
        control: (base: CSSObjectWithLabel, state: ControlProps) => ({
            ...base,
            width: '105px',
            backgroundColor: 'transparent',
            border: '2px solid #6A5399',
            borderRadius: '12px 0 0 12px',
            cursor: 'pointer',
            marginRight: '0.5px',
            zIndex: 2,
            boxShadow: 'none',
            '&:hover': {
                border: '2px solid #6A5399',
            }
        }),
        option: (base: CSSObjectWithLabel, state: { isSelected: boolean }) => ({
            ...base,
            backgroundColor: state.isSelected ? '#804AEC' : 'transparent',
            color: state.isSelected ? 'white' : '#A1A1AA',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: 'rgba(128, 74, 236, 0.1)',
            },
        }),
        singleValue: (base: CSSObjectWithLabel) => ({
            ...base,
            color: '#A1A1AA',
        }),
        menu: (base: CSSObjectWithLabel) => ({
            ...base,
            backgroundColor: '#1E1B24',
            border: '2px solid rgba(128, 74, 236, 0.3)',
            borderRadius: '12px',
            overflow: 'hidden'
        }),
        dropdownIndicator: (base: CSSObjectWithLabel) => ({
            ...base,
            color: '#804AEC',
            '&:hover': {
                color: '#804AEC',
            }
        }),
        input: (base: CSSObjectWithLabel) => ({
            ...base,
            color: '#A1A1AA'
        })
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(e.currentTarget); 
        let templateParams = {
            name: `${formData.get('firstname')} ${formData.get('lastname')}`,
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message")
        };

        // Set the EmailJS API keys
        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY!);
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID!, process.env.REACT_APP_EMAILJS_TEMPLATE_ID!, templateParams).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                form.reset();      // Clear all input fields
                setModal({
                    status: 'success',
                    message: 'Email sent successfully!'
                });
            },
            (error) => {
                console.log('FAILED...', error);
                setModal({
                    status: 'error',
                    message: 'Failed to send email. Please check your input and try again'
                });
            },
        );
    }

    return (
        <div className="contact-form-container">
            <h3 className="text-left">Get In Touch</h3>
            <p className="text-left">You can reach me anytime</p>
            <form onSubmit={handleSubmit}>
                <div className="form-name-container">
                    <input type="text" id="firstname" name="firstname" placeholder="First Name" className="form-input" required />
                    <input type="text" id="lastname" name="lastname" placeholder="Last Name" className="form-input" required />
                </div>
                <input type="email" id="email" name="email" placeholder="Email" className="form-input" required />

                <div className="flex">
                    <Select
                        options={countryOptions}
                        defaultValue={countryOptions[0]}
                        isSearchable={false}
                        styles={customStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                    <input type="tel" id="phone" name="phone" placeholder="Phone number" className="form-input" required />
                </div>
                <textarea id="message" name="message" placeholder="Reach Out, I'd Love to Hear From You!" className="form-textarea" required />
                <button type="submit" className="form-submit">Submit</button>
            </form>

            {modal && (
                <StatusModal 
                    key={Date.now()}
                    status={modal.status}
                    message={modal.message}
                />
            )};
        </div>
    )
}

const ContactEngagementInfo = () => {
    return (
        <div className="engagement-container">
            {engagementSections.map(section => (
                <div key={section.id}>
                    <p className="mb-4">{section.title}</p>
                    <p>{section.description}</p>
                </div>
            ))}
        </div>
    )
}

const ContactInfo = () => {
    return (
        <div className="contact-info-container">
            <p className="flex gap-3">
                <img 
                    src="images/assets/email-icon.svg"
                    alt="Email icon"
                    width={25}
                />
                johnpatrickmarasigan.work@gmail.com
            </p>
            <p className="flex gap-3">
                <img 
                    src="images/assets/phone-icon.svg"
                    alt="Email icon"
                    width={25}
                />
                +63 909 728 5903
            </p>
        </div>
    )
}

const ContactTitle = () => {
    return (
        <div className="title-container">
            <h3>CONTACT ME</h3>
            <p>You can reach me by email, phone, or by filling out the form below.</p>
        </div>
    )
}

const Contact = () => {
    return (
        <div id="contact" className="contact-section">
            <div className="contact-container">
                <div>
                    <ContactTitle />
                    <ContactInfo />
                    <ContactEngagementInfo />
                </div>  
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact;