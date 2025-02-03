// lib/seo.js
import { NextSeo } from 'next-seo';

const Seo = ({
  title,
  description,
  canonical,
  openGraph,
  instagram,
}) => {
  return (
    <NextSeo
      title={title || 'Default Title'}
      description={description || 'Default description for SEO.'}
      canonical={canonical || 'https://www.nourain.ae'}
      openGraph={{
        title: openGraph?.title || title,
        description: openGraph?.description || description,
        url: openGraph?.url || canonical,
        images: openGraph?.images || [],
        site_name: 'Your Website',
      }}
      twitter={{
        handle: instagram?.handle || '@alnourainn',
        site: instagram?.site || '@yourwebsite',
        cardType: instagram?.cardType || 'summary_large_image',
      }}
    />
  );
};

export default Seo;
