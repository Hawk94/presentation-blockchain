// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Image,
  BlockQuote,
  Quote,
  Cite,
  CodeBlock,
  Code,
  List,
  ListItem,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import reactNativeMobileSrc from './assets/mobile.jpg';
import reactLoveSrc from './assets/reactLove.png';
import formidableWhite from './assets/formidableWhite.png';
import formidableBlack from './assets/formidableBlack.png';
import formidableRed from './assets/formidableRed.png';
import whatIsBlockchain from './assets/whatisblockchain.png'
import bitcoinLogo from './assets/bitcoin-logo.png';
import topCoins from './assets/top-coins.jpg';
import iosEcosystem from './assets/iosEcosystem.png';
import toTheMoon from './assets/to-the-moon.jpg'
import androidEcosystem from './assets/androidEcosystem.png';
import welcomeToReact from './assets/welcomeToReact.png';
import welcomeToReactCode from './assets/welcomeToReactCode.png';
import welcomeToReactNative from './assets/welcomeToReactNative.jpeg';
import welcomeToReactNativeCode from './assets/welcomeToReactNativeCode.png';
import platformSpecificFile from './assets/platformSpecificFile.png';
import platformSpecificVar from './assets/platformSpecificVar.png';
import sewerClown from './assets/sewerClown.jpg';
import imageSizes from './assets/imageSizes.png';
import expoQRCode from './assets/expoQRCode.png';
import expo from './assets/expo.png';
import magic from './assets/magic.gif';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    black: '#1F2022',
    christmasRed: '#c43a33',
    christmasYellow: '#C5A436',
    christmasGreen: '#176100',
    white: '#FFFFFF',
    blue: '#10a3de',
    bitcoinOrange: '#FF9900',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const NormalHeading = ({ children }) => (
  <Heading size={4} textColor="white">
    {children}
  </Heading>
);

const Logo = () => <Image src={bitcoinLogo} height="120px" width="120px" />;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide bgColor="black">
          <Heading fit caps textColor="white">
            Blockchain
          </Heading>
          <Text textColor="bitcoinOrange" bold>
            (Have I lost all my money yet?)
          </Text>
          <div style={{ marginTop: '50px', marginBottom: '50px' }}>
            <Text textColor="white">Tom Miller</Text>
            <Text textColor="white">Jon Taylor</Text>
          </div>
          <Logo />
        </Slide>
        <Slide bgColor="blue">
          <Heading fit textColor="white">
            What is Blockchain?
          </Heading>
          <Image src={whatIsBlockchain} style={{'border-radius': '30px'}} height= "400px" width= "700px"/>
        </Slide>
        <Slide bgColor="black">
          <BlockQuote>
            <Quote>
              A continuously growing list of records linked and secured using cryptography.
            </Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="black">
          <Image src={topCoins} style={{'border-radius': '30px'}}/>
        </Slide>
        <Slide bgColor="black" textColor="white">
            <NormalHeading>Consensus, what is it?</NormalHeading>
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={magic} width="600px"/>
        </Slide>
        <Slide bgColor="christmasRed">
          <NormalHeading textColor="white">Not quite...</NormalHeading>
          <Text textColor="white" bold>
              Reaching consensus:
          </Text>
          <List textColor="white">
            <ListItem>Validity</ListItem>
            <ListItem>Integrity</ListItem>
            <ListItem>Agreement</ListItem>
          </List>
        </Slide>
        <Slide bgColor="christmasRed">
          <NormalHeading fit textColor="white">Consenus Algorithms</NormalHeading>
          <List textColor="white">
            <ListItem>Proof of Work</ListItem>
            <ListItem>Proof of Stake</ListItem>
          </List>
        </Slide>
        <Slide bgColor="blue">
          <Heading fit textColor="white">
            Future of BlockChain
          </Heading>
          <List textColor="white">
            <ListItem>Financial Services</ListItem>
            <ListItem>Smart Contracts</ListItem>
            <ListItem>Indisputable record of events</ListItem>
          </List>
        </Slide>
        <Slide bgColor="christmasYellow">
          <Heading fit textColor="white">
            Issues with BlockChain
          </Heading>
          <List textColor="white">
            <ListItem>Achieving consensus is expensive 💸</ListItem>
            <ListItem>Price volatility 📈📉</ListItem>
            <ListItem>Lack of regulation 🚓</ListItem>
          </List>
        </Slide>
        <Slide bgColor="blue" textColor="white">
          <NormalHeading>Why should I buy Bitcoin?</NormalHeading>
          <Image src={toTheMoon} style={{'border-radius': '30px'}} height= "400px" width= "500px" />
        </Slide>
        <Slide bgColor="black" textColor="white">
            <NormalHeading>It's the future? 📉</NormalHeading>
        </Slide>
        <Slide bgColor="christmasGreen" textColor="white">
          <NormalHeading>
            What is Satoshi? 🤯
          </NormalHeading>
        </Slide>
        <Slide bgColor="blue" textColor="white">
          <NormalHeading>
            Any Questions? 🤓
          </NormalHeading>
        </Slide>

        <Slide bgColor="christmasRed" textColor="white">
          <div style={{ marginBottom: '100px' }}>
            <Heading size={4} textColor="white">
              Thank you! 🙌
            </Heading>
          </div>
          <div style={{ marginBottom: '100px' }}>
          <Heading size={4} textColor="white">
            Lunch and Learns are awesome! 🎉
          </Heading>
          </div>
          <div style={{ marginBottom: '50px' }}>
            <Text textColor="white" >Google: "I want to be a millionaire 🤑"</Text>
          </div>
          <div style={{ marginBottom: '50px' }}>
            <Text textColor="white" >Google: "Just Hodl 🙈"</Text>
          </div>
        </Slide>
      </Deck>
    );
  }
}
