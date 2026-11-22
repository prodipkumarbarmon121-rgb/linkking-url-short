import { SITE } from '../../lib/site';

export const metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE.name} collects, uses and protects your information.`,
  alternates: { canonical: '/privacy-policy' },
};

export default function Privacy() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="small">Last updated:  November 22, 2026</p>
      <p>
        This Privacy Policy explains how {SITE.name} ({SITE.url}) collects,
        uses and protects information when you use our website and URL
        shortening service.
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you shorten a link, we store the original URL and the short code
        created for it. When you visit the site or use a short link, we may
        automatically collect technical information such as IP address, browser
        type, device type, pages visited and referring pages. We do not require
        you to create an account or give personal details to use the service.
      </p>

      <h2>How We Use Information</h2>
      <p>
        We use this information to operate and improve the service, redirect
        short links, prevent spam and abuse, and keep the website secure.
      </p>

      <h2>Cookies</h2>
      <p>
        Cookies are small files stored on your device. We and our partners may
        use cookies to make the site work, understand how it is used, and show
        advertising. You can control or delete cookies in your browser
        settings.
      </p>

      <h2>Advertising</h2>
      <p>
        We may use Google AdSense to display ads. Google and its partners use
        cookies to serve ads based on your prior visits to this and other
        websites. Google&apos;s use of advertising cookies enables it and its
        partners to serve ads to you based on your visit to our site and other
        sites on the internet. You can opt out of personalised advertising by
        visiting Google Ads Settings at https://adssettings.google.com.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We use third-party services to run the website, including Vercel
        (hosting), Supabase (database) and Google (advertising and analytics).
        These providers have their own privacy policies.
      </p>

      <h2>Data Retention</h2>
      <p>
        Shortened links are stored until they are removed by us or on request.
        You can ask us to delete a link by contacting us.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our service is not directed at children under 13, and we do not
        knowingly collect information from them.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. The date at the top shows
        when it was last changed.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, email{' '}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </>
  );
          }
