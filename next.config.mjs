/** @type {import('next').NextConfig} */
const nextConfig = {
	// Enable experimental features for better performance
	experimental: {
		scrollRestoration: true,
	},

	// Optimize images
	images: {
		formats: ['image/webp', 'image/avif'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		domains: ['skillicons.dev', 'i.ibb.co'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'skillicons.dev',
				port: '',
				pathname: '/icons/**',
			},
			{
				protocol: 'https',
				hostname: 'i.ibb.co',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
				port: '',
				pathname: '/**',
			}
		]
	},

	// Enable compression
	compress: true,

	// Security headers
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY'
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin'
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
					}
				]
			},
			{
				source: '/sw.js',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=0, must-revalidate'
					}
				]
			},
			{
				source: '/_next/static/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable'
					}
				]
			}
		];
	},

	// Optimize bundles
	webpack: (config, { dev, isServer }) => {
		// Optimize bundle size
		if (!dev && !isServer) {
			config.optimization = {
				...config.optimization,
				splitChunks: {
					chunks: 'all',
					cacheGroups: {
						default: false,
						vendors: false,
						framework: {
							chunks: 'all',
							name: 'framework',
							test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
							priority: 40,
							enforce: true
						},
						lib: {
							test(module) {
								return (
									module.size() > 160000 &&
									/node_modules[/\\]/.test(module.identifier())
								);
							},
							name(module) {
								// Create a simple hash based on module identifier
								const identifier = module.libIdent ? module.libIdent({ context: config.context }) : module.identifier();
								let hash = 0;
								for (let i = 0; i < identifier.length; i++) {
									const char = identifier.charCodeAt(i);
									hash = ((hash << 5) - hash) + char;
									hash = hash & hash; // Convert to 32-bit integer
								}
								return Math.abs(hash).toString(16).substring(0, 8);
							},
							priority: 30,
							minChunks: 1,
							reuseExistingChunk: true
						},
						commons: {
							name: 'commons',
							minChunks: 2,
							priority: 20
						},
						shared: {
							name: 'shared',
							minChunks: 2,
							priority: 10,
							reuseExistingChunk: true,
							enforce: true
						}
					}
				}
			};
		}
		return config;
	}
};
export default nextConfig;