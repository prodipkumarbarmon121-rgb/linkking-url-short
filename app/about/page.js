import { SITE } from '../../lib/site';

const description = `Learn about ${SITE.name}, a free URL shortener built by a freelancer in Bangladesh for freelancers and small businesses.`;

export const metadata = {
  title: 'About Us',
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `About ${SITE.name}`,
    description,
    url: '/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: `About ${SITE.name}`,
    description,
  },
};

export default function About() {
  return (
    <>
      <h1>About {SITE.name}</h1>
      <p>
        {SITE.name} is a free URL shortener. Paste a long web address and it
        gives you a short, clean link that is easy to share in messages,
        emails and on social media. You do not need to create an account to
        use it.
      </p>

      <h2>Why I Built {SITE.name}</h2>
      <p>
        I am Prodip Kumar Barmon, a freelancer from Rangpur, Bangladesh. In my
        work I often have to shorten long links. When I looked around, I found
        that most websites do not offer this for free and ask you to subscribe.
        I built {SITE.name} for people like me who cannot afford another
        subscription.
      </p>

      <h2>Who It Is For</h2>
      <p>
        {SITE.name} is mainly for freelancers, but small business owners and
        anyone else can use it too. It is useful for sharing work links with
        clients, sending links in chat apps and posting links on social media.
      </p>

      <h2>How I Keep the Service Safe</h2>
      <p>
        A free service can be misused, so I added some protections from the
        start:
      </p>
      <ul>
        <li>Links to known adult websites are blocked</li>
        <li>A verification check helps stop automated bots</li>
        <li>
          There is a limit on how many links one person can create per hour and
          per day
        </li>
        <li>
          Harmful links can be reported, and reported links can be disabled
        </li>
      </ul>
      <p>
        No system is perfect. If you see a harmful link, please tell me on the{' '}
        <a href="/report-abuse">Report Abuse</a> page and I will review it.
      </p>

      <h2>My Promise</h2>
      <p>
        I will do my best to keep {SITE.name} free to use and to serve you
        honestly and reliably.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or feedback? Email me at{' '}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. You can also visit
        the <a href="/contact">Contact</a> page.
      </p>
    </>
  );
}
