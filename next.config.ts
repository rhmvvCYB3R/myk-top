import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "pl", "ru"],
    defaultLocale: "en",
  },
};

export default nextConfig;
