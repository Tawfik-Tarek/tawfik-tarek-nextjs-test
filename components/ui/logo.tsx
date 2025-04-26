import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={`font-volkhov  text-primary ${
        className ? className : "text-3xl lg:text-[3.25rem]"
      }`}
    >
      FASCO
    </Link>
  );
}