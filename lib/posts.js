export const POSTS = [
  {
    slug: 'why-i-built-cutly-free-url-shortener-for-freelancers',
    title: 'Why I Built Cutly: A Free URL Shortener for Freelancers',
    description:
      'Why I built Cutly, a free URL shortener for freelancers and small businesses, and how I added protections against misuse.',
    date: '2026-11-23',
    content: [
      {
        type: 'paragraph',
        text: "I work as a freelancer, and shortening long links is something I have to do all the time. When I looked around for a tool, I found that most websites either do not offer link shortening for free or ask you to subscribe before you can use it properly. For people like me who cannot afford yet another subscription, that was frustrating. So I decided to build something myself, and that is how Cutly started.",
      },
      {
        type: 'heading',
        text: 'Why Freelancers Need a Simple URL Shortener',
      },
      {
        type: 'paragraph',
        text: "Cutly is mainly for freelancers, but small business owners can use it too. If you share work links with clients, send links in chat apps, or post links on social media, a short and clean link is easier to read, easier to type and less likely to break in a message. It works on any platform, and you do not need to create an account.",
      },
      {
        type: 'link',
        text: 'Try the free Cutly URL shortener',
        href: '/',
      },
      {
        type: 'heading',
        text: 'How to Shorten a Link with Cutly',
      },
      {
        type: 'paragraph',
        text: "Using Cutly takes only a few seconds. Paste your long link into the box on the home page, complete the quick verification check, and press the Shorten button. You will get a short link that you can copy and share anywhere.",
      },
      {
        type: 'heading',
        text: 'What Short Links Can and Cannot Do',
      },
      {
        type: 'paragraph',
        text: "A short link also keeps a long web address out of sight, which can be useful when the original address looks untidy in a message. Please remember that this is not real privacy. Anyone who has the short link can open it, and Cutly does not protect the page it leads to.",
      },
      {
        type: 'heading',
        text: 'How Cutly Helps Prevent Link Abuse',
      },
      {
        type: 'paragraph',
        text: "While building Cutly, I realised that a free link shortener can easily be misused. People may try to use it for adult content, phishing, spam or other illegal purposes. I did not want that, so I added several protections from the beginning.",
      },
      {
        type: 'paragraph',
        text: "Links to known adult websites are blocked. A verification check from Cloudflare Turnstile helps stop automated bots. Each visitor can only create a limited number of links per hour and per day, which makes mass spamming harder. The Report Abuse page lets anyone report a harmful link, and I can disable a reported link so that it no longer redirects.",
      },
      {
        type: 'link',
        text: 'Report a harmful or suspicious link',
        href: '/report-abuse',
      },
      {
        type: 'paragraph',
        text: "No system is perfect. These protections reduce misuse, but they cannot catch everything, so I will keep working to improve them. If you come across a link that looks harmful or deceptive, please report it through the Report Abuse page and I will review it.",
      },
      {
        type: 'heading',
        text: 'Stay Safe When Clicking Short Links',
      },
      {
        type: 'paragraph',
        text: "As a general rule, be careful with short links from people you do not know. A short link hides where it leads, so think before you click, especially if the message asks for passwords, payments or personal details.",
      },
      {
        type: 'heading',
        text: 'My Commitment to Cutly Users',
      },
      {
        type: 'paragraph',
        text: "My promise is simple. I will do my best to keep Cutly free to use and to give you a fast, honest and reliable service. If you have ideas or feedback, you are welcome to contact me through the Contact page.",
      },
      {
        type: 'link',
        text: 'Contact Cutly',
        href: '/contact',
      },
    ],
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
        }
