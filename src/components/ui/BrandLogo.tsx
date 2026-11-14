
import Image from 'next/image';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  width?: number;
  className?: string;
}

export function BrandLogo({
  variant = 'dark',
  width = 80,
  className = '',
}: BrandLogoProps) {
  const src =
    variant === 'light'
      ? '/brand/bark-logo-light.svg'
      : '/brand/bark-logo-dark.svg';

  return (
    <Image
      src={src}
      alt="BARK Bolivia - Educación Canina"
      width={width}
      height={width}
      className={`h-auto ${className}`}
    />
  );
}
