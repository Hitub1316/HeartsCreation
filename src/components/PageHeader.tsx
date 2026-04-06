"use client";



interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  rightElement?: React.ReactNode;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  className = "", 
  rightElement 
}: PageHeaderProps) {
  return (
    <div className={`mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-serif italic font-light tracking-tighter text-charcoal dark:text-cream transition-colors duration-700">
            {title}
          </h1>
          <div className="w-12 h-px bg-charcoal/10 dark:bg-white/10 transition-colors duration-700"></div>
          {subtitle && (
            <p className="text-charcoal/40 dark:text-white/40 font-sans tracking-gallery text-[10px] uppercase transition-colors duration-700">
              {subtitle}
            </p>
          )}
        </div>
        
        {rightElement && (
          <div className="text-[10px] tracking-gallery uppercase text-charcoal/20 dark:text-white/20 transition-colors duration-700">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
}
