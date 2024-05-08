import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'MD. Rakibul Hasan portfolio',
		short_name: 'Rakibul Hasan | Full Stack Developer',
		description: 'I’m a web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused  on building accessible, human-centered products.',
		start_url: '/',
		display: 'standalone',
		background_color: '#0A192F',
		theme_color: '#0A192F',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	}
}