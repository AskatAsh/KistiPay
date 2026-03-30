"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// ─── Data ─────────────────────────────────────────────────────────────────────

const faqs = [
    {
        id: "item-1",
        question: "Do you charge late fees?",
        answer: (
            <div className="flex flex-col gap-2">
                <p>
                    Yes, KistiPay applies a <strong className="font-medium! text-neutral-04">late fee</strong> if
                    an installment is not paid by the due date. Late fees are clearly
                    displayed in your payment schedule before you confirm a purchase. We
                    also send reminders via email and push notifications to help you stay
                    on track. To avoid any additional charges, simply ensure your payment
                    method is updated or pay early through the app.
                </p>
                <p className="text-neutral-03">
                    No hidden penalties — our fee structure is always transparent.
                </p>
            </div>
        ),
    },
    {
        id: "item-2",
        question: "How does KistiPay make money?",
        answer: (
            <div className="flex flex-col gap-2">
                <p>KistiPay is free for customers who pay on time. We generate revenue through:</p>
                <ul className="flex flex-col gap-1.5 list-none pl-0">
                    {[
                        { label: "Merchant fees", desc: "— a small percentage from partner stores for each transaction." },
                        { label: "Convenience services", desc: "— optional premium features for advanced payment controls." },
                        { label: "Responsible partnerships", desc: "— collaborations with financial institutions to offer better installment options." },
                    ].map((item) => (
                        <li key={item.label} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-02 shrink-0" />
                            <span>
                                <strong className="font-medium! text-neutral-04">{item.label}</strong> {item.desc}
                            </span>
                        </li>
                    ))}
                </ul>
                <p>
                    We never charge hidden fees, and our mission is to make installment
                    payments accessible, fair, and transparent.
                </p>
            </div>
        ),
    },
    {
        id: "item-3",
        question: "Who can use KistiPay?",
        answer: (
            <div className="flex flex-col gap-2">
                <p>
                    KistiPay is available for{" "}
                    <strong className="font-medium! text-neutral-04">Bangladeshi citizens aged 18+</strong> with a
                    valid NID, a mobile number, and a bank account or card for payments.
                    Our eligibility criteria ensure responsible spending:
                </p>
                <ul className="flex flex-col gap-1.5 list-none pl-0">
                    {[
                        "Valid KYC (Know Your Customer) verification completed.",
                        "No overdue installments from previous purchases.",
                        "Active mobile number and email address.",
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-02 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p>
                    Once you sign up and complete your profile, you&apos;ll receive a personalized spending limit to start shopping instantly.
                </p>
            </div>
        ),
    },
    {
        id: "item-4",
        question: "Why was my transaction declined?",
        answer: (
            <p>
                Common reasons: your purchase amount exceeds your current spending
                limit, your KYC is still pending, you have an overdue installment, or
                the merchant has a minimum order value your cart didn&apos;t meet. Check the
                app for details or reach out to our support team.
            </p>
        ),
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function FAQSection() {
    return (
        <section className="section-spacing bg-[#F9FAFB] px-4 md:px-6">
            <div className="max-w-200 mx-auto">

                {/* Card wrapper */}
                <div className="bg-white rounded-xl border border-[#E5E7EB] px-4 pt-8 pb-4 sm:px-6 sm:pt-10">

                    {/* Header */}
                    <div className="px-4 mb-6">
                        <h2
                            className="font-serif font-bold text-neutral-05 leading-11
                tracking-tight text-[1.875rem] sm:text-[2.25rem]"
                        >
                            Frequently Asked Questions
                        </h2>
                    </div>

                    {/* shadcn Accordion */}
                    <Accordion type="single" collapsible defaultValue="item-1">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.id}
                                value={faq.id}
                                className={`
                  border-none bg-white transition-all duration-200
                  ${index < faqs.length - 1 ? "border-b border-[#E5E7EB]" : "border-b-0"}
                `}
                            >
                                <AccordionTrigger
                                    className="
                    font-sans font-medium text-base leading-6 text-neutral-04
                    hover:text-brand-teal hover:bg-[#fefefe] hover:no-underline
                    data-[state=open]:text-brand-teal
                    px-4 py-4 rounded-none
                    focus-visible:outline-none focus-visible:ring-0
                    [&>svg]:w-2.5 [&>svg]:h-2.5
                  "
                                >
                                    {faq.question}
                                </AccordionTrigger>

                                <AccordionContent
                                    className="
                    font-sans text-sm leading-5.5 text-[#6B7280]
                    px-4 pt-0 pb-4 [&_strong]:font-semibold [&_strong]:text-neutral-04
                    [&_p]:text-[#6B7280] [&_p]:text-sm [&_p]:mb-0
                  ">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                </div>
            </div>
        </section>
    );
}