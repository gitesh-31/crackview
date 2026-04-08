import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        // Prevent clickjacking — no one can iframe your site
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        // Prevent MIME type sniffing attacks
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        // Control referrer data leakage
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        // Legacy XSS protection for older browsers
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        // Disable unnecessary browser features
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
        },
        // Force HTTPS in production (browsers remember for 1 year)
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains",
        },
        // Content Security Policy — strict whitelist of allowed sources
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: blob:",
            "font-src 'self' https://fonts.gstatic.com",
            "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
            "frame-src 'none'",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "frame-ancestors 'none'",
            "upgrade-insecure-requests",
          ].join("; "),
        },
      ],
    },
  ],
};

export default nextConfig;
