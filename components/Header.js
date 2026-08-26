import Link from "next/link";

const NAV = [
  { num: "01", label: "Profile", href: "/#about" },
  { num: "02", label: "Work", href: "/#experience" },
  { num: "03", label: "Index", href: "/#projects" },
  { num: "04", label: "Stack", href: "/#skills" },
  { num: "05", label: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="masthead">
      <div className="shell masthead-inner">
        <Link className="masthead-mark" href="/">
          <span className="masthead-name">Marcus Acosta</span>
          <span className="masthead-discipline">ML systems engineer</span>
        </Link>
        <nav className="masthead-nav" aria-label="Sections">
          {NAV.map(({ num, label, href }) => (
            <Link key={num} className="masthead-link" href={href}>
              <span className="masthead-link-num">{num}</span>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
