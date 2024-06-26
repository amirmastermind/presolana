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

<center className={classes.footer__description}> Trading Cryptocurrencies is highly speculative, carries a level of risk and may not be suitable for all investors. You may lose some or all of your invested capital, therefore you should not speculate with capital that you cannot afford to lose. The content on this site should not be considered investment advice. Investing is speculative. When investing your capital is at risk.</center>
 
        </div>


</div>
  
    </footer>
  );
}
