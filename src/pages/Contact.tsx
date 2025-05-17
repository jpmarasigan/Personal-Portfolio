import '../styles/Contact.css';

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
            <p>johnpatrickmarasigan.work@gmail.com</p>
            <p>+63 909 728 5903</p>
        </div>
    )
}

const ContactTitle = () => {
    return (
        <div className="title-container">
            <h3>CONTACT ME (in progress)</h3>
            <p>You can reach me by email, phone, or by filling out the form below. I’m happy to answer any questions.</p>
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

                </div>
                <div className="col-span-2">

                </div>
            </div>
        </div>
    )
}

export default Contact;