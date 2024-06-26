import classes from "./footer.module.scss";

import footerLogo from "../../assets/footer-logo.png";
import xLogo from "../../assets/footer-logo.png";

export default function Footer(): JSX.Element {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__logo__wrapper}>
          <img
            className={classes.footer__logo}
            src={footerLogo}
            alt="footer logo"
          />
          <p className={classes.footer__logo__title}>$VODKA THE $BEER KILLER.</p>
        </div>
        <a href="/" className={classes.footer__logo}>
          <img src={footerLogo} alt="footer logo" />
        </a>
      </div>
    </footer>
  );
}
