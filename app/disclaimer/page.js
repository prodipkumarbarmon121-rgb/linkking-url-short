import { SITE } from '../../lib/site';

export const metadata = {
  title: 'Disclaimer',
  description: `Disclaimer for ${SITE.name}.`,
  alternates: { canonical: '/disclaimer' },
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
        those websites. You follow short links at your own risk.
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
