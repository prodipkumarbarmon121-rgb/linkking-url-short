import { SITE } from '../../lib/site';

const description = `Disclaimer for ${SITE.name}: short links lead to external websites we do not control, and the service is provided without warranty.`;

export const metadata = {
  title: 'Disclaimer',
  description,
  alternates: { canonical: '/disclaimer' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} Disclaimer`,
    description,
    url: '/disclaimer',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} Disclaimer`,
    description,
  },
};

export default function Disclaimer() {
  return (
    <>
      <h1>Disclaimer</h1>
      <p>
        The information and services on {SITE.name} are provided for general
        use only.
      </p>

      <h2>External Websites</h2>
      <p>
        Short links created with {SITE.name} lead to websites we do not own or
        control. We are not responsible for the content, safety or accuracy of
        those websites. You follow short links at your own risk. If you find a
        harmful link, please report it on the{' '}
        <a href="/report-abuse">Report Abuse</a> page.
      </p>

      <h2>No Warranty</h2>
      <p>
        We do not guarantee that the service will be uninterrupted, secure or
        free of errors.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </>
  );
          }
