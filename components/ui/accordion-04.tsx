"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items?: AccordionItem[];
  defaultValue?: string;
  className?: string;
}

interface AccordionItemProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}

const items: AccordionItem[] = [
  {
    id: "01",
    title:
      "How do you approach building user interfaces that balance design and engineering constraints?",
    content:
      "I start by understanding the user goal and the design intent, then map that to a component-based system that’s realistic to build and scale. I collaborate early with design, question edge cases, and make trade-offs explicit—performance, accessibility, and maintainability usually guide final decisions.",
  },
  {
    id: "02",
    title:
      "How do you ensure performance and accessibility in modern frontend applications?",
    content:
      "I treat performance and accessibility as baseline requirements, not optimizations. That means semantic HTML, keyboard navigation, proper contrast, and testing with screen readers. On performance, I focus on bundle size, rendering behavior, and real user metrics rather than synthetic scores alone.",
  },
  {
    id: "03",
    title:
      "What does your component architecture look like in a large codebase?",
    content:
      "I favor small, composable components with clear responsibilities. Shared primitives live close to a design system, while product-specific components stay isolated. Strong typing, predictable state boundaries, and consistent naming conventions keep the system understandable as it grows.",
  },
  {
    id: "04",
    title:
      "How do you collaborate with designers, product managers, and backend engineers?",
    content:
      "I work best with tight feedback loops. I review designs early, flag technical risks before implementation, and keep communication async-friendly through docs and clear PRs. I also try to speak both design and engineering so decisions don’t get lost in translation.",
  },
  {
    id: "05",
    title:
      "How do you stay current with frontend tools and evolving best practices?",
    content:
      "I stay curious but selective. I follow core platform changes, read RFCs, and experiment in side projects before adopting anything at work. I’m cautious of hype—tools earn their place by solving real problems better than what we already have.",
  },
];

const AccordionItemComponent = ({
  item,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className="border border-border last:border-b rounded-xl">
      <button
        type="button"
        onClick={onToggle}
        className="text-left m-1 data-[state=open]:rounded-b-none data-[state=open]:[&_svg]:rotate-180 data-[state=open]:[&_svg]:[#plus]:opacity-0 [&_svg]:[#plus]:[data-state=open]:opacity-0 duration-500 hover:no-underline cursor-pointer w-full"
        data-state={isOpen ? "open" : "closed"}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
      >
        <div className="flex flex-1 px-2 justify-between items-center gap-4">
          <h3 className="font-semibold">{item.title}</h3>
        </div>
      </button>

      <div
        id={`accordion-content-${item.id}`}
        className={cn(
          "overflow-hidden transition-all duration-500 ease-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="p-6">{item.content}</div>
      </div>
    </div>
  );
};

export const Accordion04 = ({
  items: propItems = items,
  defaultValue = "02",
  className,
}: AccordionProps) => {
  const [openItem, setOpenItem] = useState<string | null>(defaultValue);

  const handleToggle = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className={cn("w-full max-w-xl", className)}>
      <div className="w-full space-y-2">
        {propItems.map((item) => (
          <AccordionItemComponent
            key={item.id}
            item={item}
            isOpen={openItem === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
};
