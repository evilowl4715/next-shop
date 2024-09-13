// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn-bucket.hb.ru-msk.vkcs.cloud'
			}
		]
	},
	webpack(config) {
		// Найти существующее правило для обработки SVG
		const fileLoaderRule = config.module.rules.find(rule =>
			rule.test?.test?.('.svg')
		);

		if (fileLoaderRule) {
			// Добавить новые правила для обработки SVG
			config.module.rules.push(
				// Обработка SVG как URL
				{
					...fileLoaderRule,
					test: /\.svg$/i,
					resourceQuery: /url/ // *.svg?url
				},
				// Обработка SVG как React компоненты
				{
					test: /\.svg$/i,
					issuer: fileLoaderRule.issuer,
					resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // исключаем *.svg?url
					use: ['@svgr/webpack']
				}
			);

			// Изменить старое правило, чтобы исключить SVG
			fileLoaderRule.exclude = /\.svg$/i;
		}

		return config;
	}
};

module.exports = nextConfig;
