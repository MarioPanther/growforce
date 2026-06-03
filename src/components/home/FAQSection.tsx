import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does SMH-Careers enable different stakeholders (i.e., employers, students, and our campus team) to utilize a single solution?",
      answer: "Our platform provides customized dashboards and tools for each stakeholder. Employers can post jobs and review candidates, students can apply and track applications, and campus teams can manage the entire recruitment process from a single interface.",
    },
    {
      question: "How can the SMH-Careers service help us get our campus recruitment process online?",
      answer: "We provide a complete digital transformation of your recruitment process including online registration, virtual interviews, document management, and automated workflows that eliminate manual paperwork.",
    },
    {
      question: "How SMH-Careers is different from our other things which we already have?",
      answer: "Unlike generic recruitment tools, we specialize in tech consultancy and campus hiring with features tailored specifically for technical roles, including skill assessments, project matching, and consultation booking.",
    },
    {
      question: "Is SMH-Careers able to help keep driving our on-campus and off-campus recruitment programs?",
      answer: "Yes, our platform supports both on-campus and remote recruitment with flexible scheduling, virtual meeting integration, and comprehensive tracking for all recruitment activities.",
    },
    {
      question: "Is it safe for students to upload their personal details?",
      answer: "Absolutely. We use enterprise-grade encryption and comply with data protection regulations. Student data is securely stored and only shared with authorized employers with explicit consent.",
    },
    {
      question: "How can we take your service or sign-up now?",
      answer: "Simply click the 'Get Started' button and choose your role (Client, Job Seeker, or Consultant). Complete the registration process, and our team will guide you through the onboarding.",
    },
    {
      question: "How do we manage particulars of our registered users?",
      answer: "Each user type has a dedicated dashboard with comprehensive profile management tools. Admins can view, filter, and export user data with robust access controls.",
    },
    {
      question: "Do I get to upload my college policies with this platform? What if I want to embed a video or upload a PDF for the viewing of the recruiters?",
      answer: "Yes, you can upload various document types including PDFs, videos, and policy documents. These can be shared with specific recruiters or made available to all stakeholders.",
    },
    {
      question: "Can we get a central repository of student data? Secondly, can we download reports for our admin?",
      answer: "Yes, we provide a centralized student database with advanced filtering and search capabilities. Detailed reports can be generated and downloaded in multiple formats (PDF, Excel, CSV).",
    },
    {
      question: "What is a Cloud SMH University account? Do I need to be a Faculty or student to register?",
      answer: "A Cloud SMH account provides access to our platform based on your role. You can register as a Faculty member, Student, Employer, or Consultant - each with role-specific features and permissions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            FAQ - Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our platform and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-4 sm:px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:text-primary py-4 sm:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Still have questions? We're here to help!
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-accent text-white rounded-full font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
