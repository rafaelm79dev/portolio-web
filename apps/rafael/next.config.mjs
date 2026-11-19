/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@portfolio/ui"],
    // Extra hosts allowed to load the dev server (comma-separated), set in .env.local
    allowedDevOrigins: (process.env.ALLOWED_DEV_ORIGINS ?? "")
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean),
};

export default nextConfig;
