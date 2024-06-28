import classes from "./App.module.scss";
import { useMemo, useContext } from "react";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import {
  createDefaultAuthorizationResultCache,
  SolanaMobileWalletAdapter,
} from "@solana-mobile/wallet-adapter-mobile";

import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PersonalInfoContextProvider } from "./web3/PersonalInfo";
import { PersonalInfoContext } from "./web3/PersonalInfo";

// components
import SaleInfo from "./components/saleInfo/saleInfo";
import Counter from "./components/counter/counter";
import ProgressCard from "./components/progressCard/progressCard";

// images
import heroImage from "./assets/sale-hero-image.png";
import roundImage from "./assets/round-section-image.png";
import roundBackgroundImage from "./assets/round-background-image.png";
import counterBg from "./assets/counter-bg.png";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";

// home page hero section
function HeroSection() {
  return (
    <section className={classes.home__hero__section} id="hero">
      <div className={classes.home__hero__image__wrapper}>
        <img src={heroImage} alt="cowboy infront of sunset" />
      </div>
      <h4 className={classes.home__hero__heading}></h4>
    </section>
  );
}

// home page round sale section
function RoundSection() {
  const { poolState } = useContext(PersonalInfoContext);
  return (
    <section className={classes.home__round__section} id="round">
      <img
        className={classes.round__section__background__image}
        src={roundBackgroundImage}
        alt="background image"
      />
      <div className={classes.home__round__section__content__wrapper}>
        <img
          className={`${classes.round__section__sale__image} ${classes.mobile}`}
          src={roundImage}
          alt="game enviroment image"
        />
        <h2 className={classes.home__round__heading}>$VODKA</h2>
        <h2 className={classes.home__round__heading__2}>PRE-SALE ROUND</h2>
        <div className={classes.round__section__sale__wrapper}>
          <img
            className={classes.round__section__sale__image}
            src={roundImage}
            alt="game enviroment image"
          />
          <div className={classes.round__section__sale__info__wrapper}>
            <SaleInfo leftText="HARDCAP" rightText={poolState.hardcap + " SOL"} />
            <SaleInfo leftText="FIXED PRICE" rightText="1 SOL= 250.000 $VODKA" />
            <SaleInfo leftText="MAX CONTRIBUTION" rightText={poolState.maxsol + " SOL"} />
            <SaleInfo
              leftText="PURCHASED TOKENS GONNA BE REWARDED 6H AFTER DEX LISTING, 100% 
LIQUIDITY GONNA BE BURNED."
              rightText=""
            />
            <p className={classes.sale__info__para}>
              CLAIMING OF <span className="inline__light__text">$VODKA</span>{" "}
              TOKENS WILL BE AVAILABLE AFTER COMPLETION OF THE PUBLIC SALE &
              LIQUIDITY EVENT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// counter section
function CounterSection() {
  return (
    <section className={classes.home__counter__section}>
      <img
        className={classes.counter__section__background__image}
        src={counterBg}
        alt="coins laying on a table"
      />
      <ProgressCard />
      <Counter targetDate="2024-07-14T00:00:00" />
    </section>
  );
}

// home page
export default function App() {

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new SolanaMobileWalletAdapter({
        cluster: WalletAdapterNetwork.Devnet,
        appIdentity: { name: "Solana Wallet Adapter App" },
        authorizationResultCache: createDefaultAuthorizationResultCache(),
      }),
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  return (
    <>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect = {true}>
        <WalletModalProvider>
          <PersonalInfoContextProvider>
            <Navigation />
            <main className={classes.main}>
              <HeroSection />
              <RoundSection />
              <CounterSection />
            </main>
            <ToastContainer pauseOnFocusLoss={false} />
            <Footer />
          </PersonalInfoContextProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}
