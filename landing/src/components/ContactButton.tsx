import type { ButtonHTMLAttributes } from 'react';

type ContactButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function ContactButton({ className = '', ...props }: ContactButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest outline outline-2 outline-white [outline-offset:-3px] transition-opacity duration-200 hover:opacity-70 ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
      }}
      {...props}
    >
      Enter
    </button>
  );
}
