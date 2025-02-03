import { HoverEffect } from "../ui/card-hover-effect";

export function CardFeature() {
    return (
        (<div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>)
    );
}
export const projects = [
    {
        title: "Real-Time Analysis",
        description:
            "Monitor customer sentiment instantly with fast processing",
        link: "https://stripe.com",
    },
    {
        title: "Multi-Language Support",
        description:
            "Analyze sentiment in 50+ languages with high accuracy.",
        link: "https://netflix.com",
    },
    {
        title: "Cutting-Edge LLM Technology",
        description:
            "Leverage the power of Large Language Models for deeper insights.",
        link: "https://google.com",
    },
    {
        title: "Seamless Integration",
        description:
            "Connect with CRM, social media, and other business tools.",
        link: "https://meta.com",
    },
    {
        title: "Data Security",
        description:
            "Guaranteed security and privacy for your customer data.",
        link: "https://amazon.com",
    },
    {
        title: "Comprehensive Reporting",
        description:
            "Get easy-to-understand, customizable visual reports.",
        link: "https://microsoft.com",
    },
];
