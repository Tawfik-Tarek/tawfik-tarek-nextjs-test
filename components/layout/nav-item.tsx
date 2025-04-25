import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  return (
      <Link
        href={href}
        className="text-primary font-poppins hover:text-primary/80 transition-colors duration-200 ease-in-out"
      >
        {label}
      </Link>
  );
}
