import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // 기존 설정 유지 또는 필요에 따라 설정

  // eslint 설정
  eslint: {

    ignoreDuringBuilds: true,
  },

  // devIndicators 설정 추가
  devIndicators: false, // Dev Tools UI 완전히 비활성화

  output: "standalone",
};

export default nextConfig;
