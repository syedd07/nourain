import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';


const withNextIntl = createNextIntlPlugin('./src/app/i18n.ts');

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
