import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Kisti Pay - Buy Now, Pay Later',
        short_name: 'Kisti Pay',
        description: 'Shop now, pay later with flexible installment plans. KistiPay makes shopping easier with instant approval and zero hidden fees.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#21BEC9',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '32x32',
                type: 'image/x-icon',
            },
            {
                src: '/apple-icon.jpg',
                sizes: '180x180',
                type: 'image/jpg',
                purpose: 'any',
            },
        ],
    }
}