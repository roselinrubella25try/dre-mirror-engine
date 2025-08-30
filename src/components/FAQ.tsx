import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the box?",
    answer: "Each Beats product includes the headphones/earbuds, charging cable, quick start guide, and warranty information. Specific accessories may vary by product."
  },
  {
    question: "How long does the battery last?",
    answer: "Battery life varies by product. Our latest models offer up to 40 hours of listening time with ANC off, and up to 22 hours with ANC on."
  },
  {
    question: "Are Beats compatible with Android?",
    answer: "Yes! While optimized for Apple devices, Beats work seamlessly with Android phones and other Bluetooth-enabled devices."
  },
  {
    question: "What's the warranty coverage?",
    answer: "All Beats products come with a 1-year limited warranty covering manufacturing defects. Extended warranty options are available."
  },
  {
    question: "Can I use them for workouts?",
    answer: "Many Beats models feature sweat and water resistance ratings (IPX4 or higher), making them perfect for workouts and active lifestyles."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Beats products and services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-6 text-lg font-medium rounded-full"
          >
            View All FAQs
          </Button>
        </div>
      </div>
    </section>
  );
};