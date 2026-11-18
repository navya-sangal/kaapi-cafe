import { site } from "@/data/site";
import CurrentYear from "@/components/CurrentYear";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="nav__logo">{site.name}</span>
        <p className="muted">
          © <CurrentYear initial={new Date().getFullYear()} /> {site.name} · Demo project. The café and its reviews are fictional.
        </p>
      </div>
    </footer>
  );
}
