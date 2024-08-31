import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Ti-Books?",
    answer:
      "Ti-Books is a platform dedicated to share Malagasy folktales (Angano) translated into English. Our interactive storybooks aim to promote Malagasy culture and assist english learners in improving their English skills.",
  },
  {
    question: "How can I access the storybooks?",
    answer:
      "You can access our digital storybooks directly on our website. Simply by clicking 'Explore' button and browse our collection.",
  },
  {
    question: "Do you offer any free content?",
    answer:
      "Yes, we offer full access to all our interactive storybooks for free, you can add your email in footer above to stay connected for our next updated.",
  },
  {
    question: "How can I contact support?",
    answer:
      "If you need assistance, you can contact us through the 'Contact' section on our website.",
  },
  {
    question: "Can I contribute a story to Ti-Books?",
    answer:
      "We welcome contributions! Please reach out to us through our contact form with your story ideas and details.",
  },
];

const FAQ = () => {

  return (
    <section className="max-w-screen-lg pt-4 pb-12 mx-auto">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion key={`faq_${index}`} type="single" collapsible>
              <AccordionItem value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
