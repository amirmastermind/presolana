import classes from "./footer.module.scss";

import footerLogo from "../../assets/footer-logo.png";
import xLogo from "../../assets/x-logo.svg";

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
          <p className={classes.footer__logo__title}>THIS IS $VODKA THE $BEER KILLER!</p>
          <h6 className={classes.footer__logo__description}> Trading Cryptocurrencies is highly speculative, carries a level of risk and may not be suitable for all investors. You may lose some or all of your invested capital, therefore you should not speculate with capital that you cannot afford to lose. The content on this site should not be considered investment advice. Investing is speculative. When investing your capital is at risk.
We do not allow users of these countries to participate in the presale: The information on this site is not intended for residents of Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq, Syria, USA, Vatican City, or for use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation." </h6>
        </div>
        <a href="/" className={classes.footer__x__logo}>
          <img src={xLogo} alt="x/twitter logo" />
        </a>
      </div>
    </footer>
  );
}
