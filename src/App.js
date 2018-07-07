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
  Code,
  CodePane,
  List,
  ListItem,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import 'prismjs/components/prism-bash';

// Images
import odessajsLogo from './assets/odessajs-logo.svg';
import chernivtsijs from './assets/chernivtsijs-logo.png';
import chernivtsijsBg from './assets/chernivtsijs-bg.jpg';
import marketplace from './assets/marketplace.png';
import probot from './assets/probot.png';
import unfurl from './assets/unfurl.png';
import stale from './assets/stale.png';
import welcome from './assets/welcome.png';
import settings from './assets/settings.png';
import wip from './assets/wip.gif';
import probotWebsite from './assets/probot-website.png';
import probotApps from './assets/probot-apps.png';

// Require CSS
import 'normalize.css';

const colors = {
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#00B0D8',
  quartenary: '#CECECE',
  blue: '#00B0D8',
  graylight: '#fafbfc',
  graydark: '#586069',
  black: '#24292e',
};

const fonts = {
  primary: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
  secondary: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
};

const theme = createTheme(colors, fonts);

const Style = ({ textColor, children, ...props }) => (
  <span
    style={{
      color: colors[textColor] || textColor,
    }}
    {...props}
  >
    {children}
  </span>
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
        <Slide bgColor="white">
          <Image src={odessajsLogo} width="33%" />
          <Heading textColor="#C74242">Привіт, Одесо!</Heading>
        </Slide>

        <Slide>
          <Link href="//twitter.com/denysdovhan" target="_blank">
            <Heading>@denysdovhan</Heading>
            <Text textColor="graydark">Denys Dovhan</Text>
          </Link>
        </Slide>

        <Slide bgImage={chernivtsijsBg} bgDarken={0.5}>
          <Link href="//chernivtsi.js.org/" target="_blank">
            <Image src={chernivtsijs} width="80%" margin="5rem auto 0" />
            <Text textColor="white" margin="7rem 0 0">
              chernivtsi.js.org
            </Text>
          </Link>
        </Slide>

        <Slide>
          <Heading caps fit>
            Автоматизація
          </Heading>
          <Heading caps fit textColor="graydark">
            GitHub
          </Heading>
        </Slide>

        <Slide bgColor="black">
          <BlockQuote>
            <Quote>Було би круто, якби GitHub умів …</Quote>
            <Cite>Більшість з нас, час від часу</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="black">
          <BlockQuote>
            <Quote>
              Було би круто, якби GitHub умів{' '}
              <Style textColor="blue">відповідати на іш’ю</Style>
              .
            </Quote>
            <Cite>Більшість з нас, час від часу</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="black">
          <BlockQuote>
            <Quote>
              Було би круто, якби GitHub умів{' '}
              <Style textColor="blue">перевіряти ПРи</Style>
              .
            </Quote>
            <Cite>Більшість з нас, час від часу</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="black">
          <BlockQuote>
            <Quote>
              Було би круто, якби GitHub умів{' '}
              <Style textColor="blue">присвоювати лейбли</Style>
              .
            </Quote>
            <Cite>Більшість з нас, час від часу</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="black">
          <BlockQuote>
            <Quote>
              Було би круто, якби GitHub умів{' '}
              <Style textColor="blue">те, що мені потрібно</Style>
              .
            </Quote>
            <Cite>Більшість з нас, час від часу</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading>І він уміє!</Heading>
        </Slide>

        <Slide>
          <Heading caps fit textColor="graydark">
            GitHub
          </Heading>
          <Heading caps fit>
            Apps
          </Heading>
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
          <Text textColor="graydark">А́ктори першого роду на GitHub</Text>
        </Slide>

        <Slide>
          <Heading>GitHub Apps</Heading>
          <Text textColor="graydark">
            Можуть коментувати іш’ю та ПРи, змінювати файли, комітити зміни і тд
          </Text>
        </Slide>

        <Slide>
          <Heading>GitHub Apps</Heading>
          <Text textColor="graydark">
            Працюють з частковими правами доступу
          </Text>
        </Slide>

        <Slide>
          <Heading>GitHub Apps</Heading>
          <Text textColor="graydark">Працюють з вбудованими вебхуками</Text>
        </Slide>

        <Slide>
          <Heading>Надто складно</Heading>
          <Text textColor="graydark">
            Валітація та обробка вебхуків може бути оверкілом, якщо ви хочете
            вирішити одну просту задачу
          </Text>
        </Slide>

        <Slide bgColor="black">
          <BlockQuote>
            <Quote>
              Складно?!<br />
              Зараз пофіксимо!
            </Quote>
            <Cite>Наші друзі з GitHub</Cite>
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
            Бере на себе отримання та валідацію вебхуків
          </Text>
        </Slide>

        <Slide>
          <Heading>Автоматизація GitHub</Heading>
          <Text textColor="graydark">
            Підписуємось на події — виконуємо щось у відповідь
          </Text>
        </Slide>

        <Slide>
          <Heading>Як це працює?</Heading>
          <Text textColor="graydark">
            Під капотом Express, який працює з GitHub API
          </Text>
        </Slide>

        <Slide>
          <Heading>Приклад!</Heading>
          <Text textColor="graydark">
            Елементарний бот для вітання нових користувачів
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
};
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
  app.on('issues.opened', async context => {
    // A new issue was opened, what should we do with it?
    context.log(context.payload);
  });
};
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
          <Heading>Пісочниця</Heading>
          <Link href="https://glitch.com/edit/#!/sleet-collar">
            <Image
              src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fview-source%402x.png?1513093958802"
              alt="view source button"
              aria-label="view source"
              height="50"
              margin="2rem auto"
            />
          </Link>
        </Slide>

        <Slide>
          <Heading>Як це все розробляти?</Heading>
          <Text textColor="graydark">probot.github.io/docs/development/</Text>
        </Slide>

        <Slide>
          <Heading>smee.io</Heading>
          <Text textColor="graydark">
            Отримує вебхуки і відправляє їх на локально запущену аплікуху
          </Text>
        </Slide>

        <Slide>
          <Heading>smee.io</Heading>
          <Text textColor="graydark">
            Згенерований URL використовуємо в якості Webhook URL
          </Text>
        </Slide>

        <Slide>
          <Heading>Реєструємо бота</Heading>
          <Link href="https://github.com/settings/apps/new">
            <Text textColor="graydark">github.com/settings/apps/new</Text>
          </Link>
        </Slide>

        <Slide>
          <Heading>Приватний ключ</Heading>
          <Text textColor="graydark">
            Скачуємо приватний ключ і ставимо в корінь проекту
          </Text>
        </Slide>

        <Slide>
          <Heading>Тестовий репозиторій</Heading>
          <Text textColor="graydark">
            До нього підключаємо нашу аплікуху і так тестуємо
          </Text>
        </Slide>

        <Slide>
          <Heading>GitHub GraphQL API</Heading>
          <Text textColor="graydark">
            Використовуємо <Code>context.github.query(query, data)</Code>.
          </Text>
        </Slide>

        <Slide bgColor="#2A2834">
          <CodePane
            lang="javascript"
            textSize="1.5rem"
            source={`
// index.js

const addComment = \`
  mutation comment($id: ID!, $body: String!) {
    addComment(input: {subjectId: $id, body: $body}) {
      clientMutationId
    }
  }
\`;

module.exports = robot => {
  robot.on('issues.opened', async context => {
    context.github.query(addComment, {
      id: context.payload.issue.node_id,
      body: 'Hello World'
    });
  });
};
            `}
          />
        </Slide>

        <Slide>
          <Heading>Розширення</Heading>
          <Text textColor="graydark">
            Користні утиліти для вирішення типових завдань
          </Text>
        </Slide>

        <Slide>
          <Link href="https://github.com/getsentry/probot-config">
            <Heading>probot-config</Heading>
          </Link>
          <Text textColor="graydark">
            Для завантаження конфігурації з <Code>.github/&lt;file&gt;</Code>.
          </Text>
        </Slide>

        <Slide bgColor="#2A2834">
          <CodePane
            lang="javascript"
            textSize="1.5rem"
            source={`
// index.js

const getConfig = require('probot-config');

module.exports = robot => {
  robot.on('push', async context => {
    // .github/test.yml
    const config = await getConfig(context, 'test.yml');
    context.log('Loaded config', config);
  });
};
            `}
          />
        </Slide>

        <Slide>
          <Link href="http://github.com/probot/commands">
            <Heading>probot-commands</Heading>
          </Link>
          <Text textColor="graydark">
            Для роботою з командами <Code>/command arg1, arg2</Code>.
          </Text>
        </Slide>

        <Slide bgColor="#2A2834">
          <CodePane
            lang="javascript"
            textSize="1.5rem"
            source={`
// index.js

const commands = require('probot-commands');

module.exports = robot => {
  // /label foo, bar
  commands(app, 'label', (context, command) => {
    const labels = command.arguments.split(/, */);
    return context.github.issues.addLabels(
       context.issue({ labels })
    );
  });
};
            `}
          />
        </Slide>

        <Slide>
          <Link href="https://github.com/probot/metadata">
            <Heading>probot-metadata</Heading>
          </Link>
          <Text textColor="graydark">
            Для збереження метаданних про іш’ю та ПРи.
          </Text>
        </Slide>

        <Slide bgColor="#2A2834">
          <CodePane
            lang="javascript"
            textSize="1.5rem"
            source={`
// index.js

const metadata = require('probot-metadata');

module.exports = robot => {
  robot.on('issue_comment.created', async context => {
    const meta = await metadata(context);
    await meta.set('edits', await meta.get('edits') || 1);
  });
};
            `}
          />
        </Slide>

        <Slide>
          <Link href="https://github.com/probot/attachments">
            <Heading>probot-attachments</Heading>
          </Link>
          <Text textColor="graydark">
            Для "прикріплення" додаткових матеріалів до іш’ю та ПРів.
          </Text>
        </Slide>

        <Slide bgColor="#2A2834">
          <CodePane
            lang="javascript"
            textSize="1.5rem"
            source={`
// index.js

const attachments = require('probot-attachments');

module.exports = robot => {
  robot.on('issue_comment.created', context => {
    return attachments(context).add({
      'title': 'Hello World',
      'title_link': 'https://site.com/foobar'
    });
  });
};
            `}
          />
        </Slide>

        <Slide>
          <Link href="https://github.com/probot/scheduler">
            <Heading>probot-scheduler</Heading>
          </Link>
          <Text textColor="graydark">
            Планування задач для (інтервали, таймаути).
          </Text>
        </Slide>

        <Slide bgColor="#2A2834">
          <CodePane
            lang="javascript"
            textSize="1.5rem"
            source={`
// index.js

const attachments = require('probot-attachments');

module.exports = robot => {
  robot.on('issue_comment.created', context => {
    return attachments(context).add({
      'title': 'Hello World',
      'title_link': 'https://site.com/foobar'
    });
  });
};
            `}
          />
        </Slide>

        <Slide>
          <Image src={unfurl} />
        </Slide>

        <Slide>
          <Heading>Деплой</Heading>
          <Text textColor="graydark">Heroku, Now, Glitch, etc</Text>
        </Slide>

        <Slide>
          <Heading>Деплой</Heading>
          <Text textColor="graydark">
            Головне не забути встановити правильні змінні оточення
          </Text>
        </Slide>

        <Slide>
          <Heading>На практиці</Heading>
          <Text textColor="graydark">
            Яких ботів можна додати собі прямо зараз
          </Text>
        </Slide>

        <Slide>
          <Image margin="0 auto 5rem" src={stale} />
          <Heading size={3} textColor="blue">
            probot/stale
          </Heading>
          <Text textColor="graydark">
            Закриває іш’ю після періоду неактивності
          </Text>
        </Slide>

        <Slide>
          <Image margin="0 auto 5rem" src={welcome} />
          <Heading size={3} textColor="blue">
            behaviorbot/welcome
          </Heading>
          <Text textColor="graydark">Вітає нових контрибюторів</Text>
        </Slide>

        <Slide>
          <Image margin="0 auto 5rem" src={settings} />
          <Heading size={3} textColor="blue">
            probot/settings
          </Heading>
          <Text textColor="graydark">
            Зберігати налаштування репозиторію в самому репозиторію
          </Text>
        </Slide>

        <Slide>
          <Image margin="0 auto 5rem" src={wip} width="60%" />
          <Heading size={3} textColor="blue">
            gr2m/wip-bot
          </Heading>
          <Text textColor="graydark">Забороняє зливати ПРи з WIP у назві</Text>
        </Slide>

        <Slide>
          <Heading>І навіть більше!</Heading>
          <Text textColor="graydark">
            Переміщувати іш’ю, отримувати репорти з CI, закривати треди,
            оновлювати документацію, синхроніхувати форки і тд
          </Text>
        </Slide>

        <Slide>
          <Image src={probotApps} />
          <Link href="//probot.github.io/apps">
            <Text textColor="graydark">probot.github.io/apps</Text>
          </Link>
        </Slide>

        <Slide>
          <Heading>Спробуйте!</Heading>
          <Text textColor="graydark">
            Probot допоможе вам автоматизувати ваші робочі процеси на GitHub
          </Text>
        </Slide>

        {/* Додаткові матеріали */}
        {/* Дока: https://probot.github.io/api/latest/ */}
        {/* Слек: https://probot-slackin.herokuapp.com/ */}
        {/* З сайту: https://probot.github.io/community/ */}

        <Slide>
          <Heading size={2} textColor="blue">
            Матеріали
          </Heading>
          <List>
            <ListItem textSize="2.5rem">
              <Link href="https://probot.github.io" textColor="secondary">
                probot.github.io
              </Link>
            </ListItem>
            <ListItem textSize="2.5rem">
              <Link
                href="https://probot.github.io/api/latest"
                textColor="secondary"
              >
                Довідник API
              </Link>
            </ListItem>
            <ListItem textSize="2.5rem">
              <Link
                href="https://probot-slackin.herokuapp.com/"
                textColor="secondary"
              >
                Probot Slack
              </Link>
            </ListItem>
            <ListItem textSize="2.5rem">
              <Link
                href="https://probot.github.io/community/"
                textColor="secondary"
              >
                Спільнота Probot
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Дякую!</Heading>
          <Text margin="1rem auto" lineHeight={1.2}>
            7-8 Липня 2018
          </Text>
          <Link href="//denysdovhan.com/slides-automating-github-workflow">
            <Text textSize="2rem">
              denysdovhan.com/slides-automating-github-workflow
            </Text>
          </Link>
        </Slide>
      </Deck>
    );
  }
}

export default App;
