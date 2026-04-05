import { PortableText, PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-serif italic text-charcoal dark:text-cream mt-16 mb-8 first:mt-0 transition-colors duration-700">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-serif italic text-charcoal/90 dark:text-cream/90 mt-12 mb-6 first:mt-0 transition-colors duration-700">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 last:mb-0 leading-relaxed transition-colors duration-700">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-primary/20 pl-6 py-2 italic font-serif text-xl my-8 text-charcoal/70 dark:text-cream/70 transition-colors duration-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-8 space-y-3 marker:text-primary/40">
        {children}
      </ul>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-charcoal dark:text-white transition-colors duration-700">
        {children}
      </strong>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a 
          href={value?.href} 
          target={target} 
          rel={target === "_blank" ? "no-opener noreferrer" : undefined}
          className="text-primary hover:opacity-70 underline decoration-primary/20 underline-offset-4 transition-all"
        >
          {children}
        </a>
      );
    },
  },
};

export default function SanityContent({ value }: { value: any }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
