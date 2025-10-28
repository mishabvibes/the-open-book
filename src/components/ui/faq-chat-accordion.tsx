"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id?: number;
  question: string;
  answer: string;
  category?: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

interface FaqAccordionProps {
  data: FAQItem[];
  className?: string;
  timestamp?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export function FaqAccordion({
  data,
  className,
  timestamp,
  questionClassName,
  answerClassName,
}: FaqAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <div className={cn("p-2 sm:p-4", className)}>
      {timestamp && (
        <div className="mb-4 text-sm text-muted-foreground">{timestamp}</div>
      )}

      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value)}
      >
        {data.map((item, index) => {
          const itemId = item.id?.toString() || index.toString();
          return (
            <Accordion.Item 
              value={itemId} 
              key={itemId} 
              className="mb-2 sm:mb-3"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-start sm:items-center justify-between gap-x-2 sm:gap-x-4 text-left group">
                  <div
                    className={cn(
                      "relative flex-1 flex flex-col sm:flex-row items-start sm:space-x-3 space-y-2 sm:space-y-0 rounded-xl sm:rounded-2xl p-3 sm:p-4 transition-all duration-300",
                      openItem === itemId
                        ? "bg-gradient-to-r from-blue-50 to-violet-50 border-2 border-blue-200 shadow-lg shadow-blue-500/10" 
                        : "bg-white border-2 border-slate-200 hover:border-blue-300 hover:shadow-md",
                      questionClassName
                    )}
                  >
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      {item.category && (
                        <span className={cn(
                          "inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex-shrink-0",
                          openItem === itemId
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-700"
                        )}>
                          {item.category}
                        </span>
                      )}
                      
                      {item.icon && (
                        <span
                          className={cn(
                            "text-xl sm:text-2xl flex-shrink-0",
                            item.iconPosition === "right" && !item.category ? "order-last ml-auto" : ""
                          )}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                    
                    <span className={cn(
                      "font-bold text-sm sm:text-base leading-snug flex-1 w-full",
                      openItem === itemId ? "text-blue-900" : "text-slate-900"
                    )}>
                      {item.question}
                    </span>
                  </div>

                  <span 
                    className={cn(
                      "flex-shrink-0 transition-colors p-1.5 sm:p-2 rounded-lg sm:rounded-xl mt-1 sm:mt-0",
                      openItem === itemId 
                        ? "bg-blue-100 text-blue-600" 
                        : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                    )}
                  >
                    {openItem === itemId ? (
                      <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              
              <Accordion.Content asChild forceMount>
                <motion.div
                  initial="collapsed"
                  animate={openItem === itemId ? "open" : "collapsed"}
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="ml-2 mt-2 mb-3 sm:ml-4 md:ml-6 sm:mb-4">
                    <div
                      className={cn(
                        "relative rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 sm:px-6 sm:py-4 text-white shadow-lg max-w-full sm:max-w-[95%]",
                        // Chat bubble arrow - hidden on very small screens
                        "before:hidden sm:before:block before:absolute before:top-0 before:-left-2 before:w-0 before:h-0",
                        "before:border-t-[12px] sm:before:border-t-[15px] before:border-t-transparent",
                        "before:border-r-[15px] sm:before:border-r-[18px] before:border-r-blue-600",
                        "before:border-b-[12px] sm:before:border-b-[14px] before:border-b-transparent",
                        answerClassName
                      )}
                    >
                      <p className="text-xs sm:text-sm leading-relaxed font-light">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
}

