import { useState } from 'react';
import { Monitor } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export function ResilientImage({
  src,
  alt,
  fallbackTitle,
  className = '',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0E1B36] via-[#081022] to-[#040812] p-6 text-center border border-slate-300/15 ${className}`}
      >
        <Monitor className="w-8 h-8 text-slate-300/80 mb-3" strokeWidth={1.5} aria-hidden="true" />
        <span className="text-sm font-medium text-slate-200 max-w-xs">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
