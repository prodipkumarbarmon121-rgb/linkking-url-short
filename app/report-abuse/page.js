import { SITE } from '../../lib/site';

const description = `Report a harmful, illegal or abusive link created with ${SITE.name}. Send the short link and the reason and it will be reviewed.`;

export const metadata = {
  title: 'Report Abuse',
  description,
  alternates: { canonical: '/report-abuse' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `Report Abuse | ${SITE.name}`,
    description,
    url: '/report-abuse',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Report Abuse | ${SITE.name}`,
    description,
  },
};

export default function ReportAbuse() {
  return (
    <>
      <h1>Report Abuse</h1>
      <p>
        I take abuse seriously. If you find a short link that leads to
        harmful, illegal or deceptive content, please tell me so I can review
        and remove it.
      </p>

      <h2>How to Report</h2>
      <p>
        Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with:
      </p>
      <ul>
        <li>the full short link</li>
        <li>
          the reason (phishing, malware, adult content, copyright, spam or
          other)
        </li>
        <li>any extra details that help me check it</li>
      </ul>
      <p>
        For a copyright complaint, please also say what work you own and where
        the original can be found.
      </p>

      <h2>What Happens Next</h2>
      <p>
        I review every report. If a link breaks our{' '}
        <a href="/terms">Terms of Service</a>, I disable it so that it no
        longer redirects.
      </p>
    </>
  );
  }
