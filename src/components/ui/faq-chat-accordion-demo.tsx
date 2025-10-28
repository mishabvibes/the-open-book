/**
 * FAQ Chat Accordion - Demo & Usage Examples
 * 
 * This component creates a beautiful chat-style FAQ accordion
 * with smooth animations and interactive states.
 */

import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

const defaultData = [
  {
    answer: "The internet doesn't close. It's available 24/7.",
    icon: "❤️",
    iconPosition: "right" as const,
    id: 1,
    question: "How late does the internet close?",
    category: "General"
  },
  {
    answer: "No, you don't need a license to browse this website.",
    id: 2,
    question: "Do I need a license to browse this website?",
    category: "Access"
  },
  {
    answer: "Our cookies are digital, not edible. They're used for website functionality.",
    id: 3,
    question: "What flavour are the cookies?",
    category: "Privacy"
  },
  {
    answer: "Yes, but we do have a return policy",
    icon: "⭐",
    iconPosition: "left" as const,
    id: 4,
    question: "Can I get lost here?",
    category: "Navigation"
  },
  {
    answer: "Don't worry, you can always go back or refresh the page.",
    id: 5,
    question: "What if I click the wrong button?",
    category: "Help"
  },
];

/**
 * Default Demo
 * Basic usage with default styling
 */
function DefaultDemo() {
  return (
    <FaqAccordion 
      data={defaultData}
      className="max-w-[700px]"
    />
  );
}

/**
 * Custom Style Demo
 * Custom colors and styling
 */
function CustomStyleDemo() {
  return (
    <FaqAccordion 
      data={defaultData}
      className="max-w-[700px]"
      questionClassName="bg-secondary hover:bg-secondary/80"
      answerClassName="bg-secondary text-secondary-foreground"
      timestamp="Updated daily at 12:00 PM"
    />
  );
}

/**
 * No Icons Demo
 * FAQ without icons
 */
function NoIconsDemo() {
  const dataWithoutIcons = defaultData.map(({ icon, iconPosition, ...rest }) => rest);
  
  return (
    <FaqAccordion 
      data={dataWithoutIcons}
      className="max-w-[700px]"
    />
  );
}

/**
 * With Categories Demo
 * FAQ with category badges
 */
function WithCategoriesDemo() {
  const dataWithCategories = defaultData.map(item => ({
    ...item,
    category: item.category || "General"
  }));
  
  return (
    <FaqAccordion 
      data={dataWithCategories}
      className="max-w-[700px]"
    />
  );
}

export { DefaultDemo, CustomStyleDemo, NoIconsDemo, WithCategoriesDemo };

