import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: '/private/',
            },
            {
                userAgent: ['Applebot', 'Bingbot'],
                allow: '/',
                disallow: '/admin/',
            },
            {
                userAgent: '*',
                disallow: '/',
            },
        ],
        sitemap: ['https://kisti-pay.vercel.app/sitemap.xml'],
    }
}
