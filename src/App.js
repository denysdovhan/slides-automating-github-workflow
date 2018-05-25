import React from 'react';
import {
  Deck,
  Slide,
  Heading,
  Text,
  Image,
  Link,
  Quote,
  Cite,
  BlockQuote,
  CodePane,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import 'prismjs/components/prism-bash';

// Images
import yglf from './assets/yglf.jpeg';
import marketplace from './assets/marketplace.png';
import probot from './assets/probot.png';
import stale from './assets/stale.png';
import welcome from './assets/welcome.png';
import settings from './assets/settings.png';
import probotWebsite from './assets/probot-website.png';
import probotApps from './assets/probot-apps.png';

// Require CSS
import 'normalize.css';

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#00B0D8',
    quartenary: '#CECECE',
    blue: '#00B0D8',
    graylight: '#fafbfc',
    graydark: '#586069',
    black: '#24292e',
  },
  {
    primary: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
    secondary: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
  },
);

class App extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
        transition={['fade']}
        transitionDuration={500}
        progress="none"
      >
        <Slide bgImage={yglf} bgDarken={0.5}>
          <Heading textColor="white">Hello, YGLF!</Heading>
        </Slide>

        <Slide>
          <Link href="//twitter.com/denysdovhan" target="_blank">
            <Heading>@denysdovhan</Heading>
            <Text textColor="graydark">Denys Dovhan</Text>
          </Link>
        </Slide>

        <Slide>
          <Heading caps fit>
            Bots
          </Heading>
          <Heading caps fit textColor="graydark">
            for GitHub
          </Heading>
        </Slide>

        <Slide bgColor="black">
          <BlockQuote>
            <Quote>It would be cool if GitHub could…</Quote>
            <Cite>Most of us, sometimes</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading>Yes, it can!</Heading>
        </Slide>

        <Slide>
          <Heading>GitHub Apps</Heading>
          <Text textColor="graydark">
            <Link
              textColor="graydark"
              href="//github.com/marketplace/greenkeeper"
              target="_blank"
            >
              Greenkeeper
            </Link>,{' '}
            <Link
              textColor="graydark"
              href="//github.com/marketplace/sentry"
              target="_blank"
            >
              Sentry
            </Link>,{' '}
            <Link
              textColor="graydark"
              href="//github.com/marketplace/zenhub"
              target="_blank"
            >
              ZenHub
            </Link>,{' '}
            <Link
              textColor="graydark"
              href="//github.com/marketplace/codecov"
              target="_blank"
            >
              Codecov
            </Link>, etc
          </Text>
        </Slide>

        <Slide>
          <Link href="//github.com/marketplace">
            <Image src={marketplace} />
            <Text textColor="graydark" target="_blank">
              github.com/marketplace
            </Text>
          </Link>
        </Slide>

        <Slide>
          <Heading>GitHub Apps</Heading>
          <Text textColor="graydark">
            They are first-class actors within GitHub
          </Text>
        </Slide>

        <Slide>
          <Heading>GitHub Apps</Heading>
          <Text textColor="graydark">
            They can comment under issue or PRs, change files, create commits
            and so on
          </Text>
        </Slide>

        <Slide>
          <Heading>GitHub Apps</Heading>
          <Text textColor="graydark">
            They work with granular permissions and built-in webhooks
          </Text>
        </Slide>

        <Slide>
          <Heading>It's too complicated</Heading>
          <Text textColor="graydark">
            Validating and receiving webhooks might be an overkill for simple
            tasks
          </Text>
        </Slide>

        <Slide bgColor="black">
          <BlockQuote>
            <Quote>We understand you!</Quote>

            <Cite>People from GitHub</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Image src={probot} margin="-5% auto 0" />
        </Slide>

        <Slide>
          <Link href="//probot.github.io">
            <Image src={probotWebsite} />
            <Text textColor="graydark">probot.github.io</Text>
          </Link>
        </Slide>

        <Slide>
          <Heading>probot</Heading>
          <Text textColor="graydark">
            Takes care of receiving and validating webhooks
          </Text>
        </Slide>

        <Slide>
          <Heading>Scripting GitHub</Heading>
          <Text textColor="graydark">
            You can watch for changes and trigger an action in response
          </Text>
        </Slide>

        <Slide>
          <Heading>How it works?</Heading>
          <Text textColor="graydark">
            Express app under the hood that deals with GitHub API
          </Text>
        </Slide>

        <Slide>
          <Heading>Let's take a look!</Heading>
          <Text textColor="graydark">
            Simple example of super tiny gentle bot
          </Text>
        </Slide>

        <Slide bgColor="#2A2834">
          <CodePane
            lang="bash"
            textSize="2rem"
            source={`
# Scaffold a robot (like you do with CRA)
npx create-probot-app my-first-bot
            `}
          />
        </Slide>

        <Slide bgColor="#2A2834">
          <CodePane
            lang="javascript"
            textSize="2rem"
            source={`
// index.js

module.exports = robot => {
  // robot is an Express app
  // your code goes here
}
            `}
          />
        </Slide>

        <Slide bgColor="#2A2834">
          <CodePane
            lang="javascript"
            textSize="1.5rem"
            source={`
// index.js

module.exports = robot => {

  robot.on('issues.opened', async context => {
    const { body } = context.payload.issue;

    // Create a comment
    const comment = context.issue({
      body: body.includes('Thanks')
        ? \`You're welcome!\`
        : \`Thanks!\`
    });

    // And publish it
    return context.github.issues.createComment(comment);
  });

};
            `}
          />
        </Slide>

        <Slide>
          <Heading>People use probots</Heading>
          <Text textColor="graydark">
            They help to automate their routine tasks
          </Text>
        </Slide>

        <Slide>
          <Image margin="0 auto 5rem" src={stale} />
          <Heading size={3} textColor="blue">
            probot/stale
          </Heading>
          <Text textColor="graydark">
            Closes issues after a period of inactivity
          </Text>
        </Slide>

        <Slide>
          <Image margin="0 auto 5rem" src={welcome} />
          <Heading size={3} textColor="blue">
            behaviorbot/welcome
          </Heading>
          <Text textColor="graydark">Welcome new contributors</Text>
        </Slide>

        <Slide>
          <Image margin="0 auto 5rem" src={settings} />
          <Heading size={3} textColor="blue">
            probot/settings
          </Heading>
          <Text textColor="graydark">
            Keep your repository settings under Git
          </Text>
        </Slide>

        <Slide>
          <Heading>And more!</Heading>
          <Text textColor="graydark">
            Move and autolabel issues, CI reporters, lock threads, update docs,
            sync forks and so on
          </Text>
        </Slide>

        <Slide>
          <Image src={probotApps} />
          <Link href="//probot.github.io/apps">
            <Text textColor="graydark">probot.github.io/apps</Text>
          </Link>
        </Slide>

        <Slide>
          <Heading>Thanks!</Heading>
          <Text margin="1rem auto" lineHeight={1.2}>
            24-25 May 2018
          </Text>
          <Link href="//denysdovhan.com/slides-writing-bots-for-github">
            <Text textSize="2rem">
              denysdovhan.com/slides-writing-bots-for-github
            </Text>
          </Link>
        </Slide>
      </Deck>
    );
  }
}

export default App;
