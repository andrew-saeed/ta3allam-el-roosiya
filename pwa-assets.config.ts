import type { Preset } from '@vite-pwa/assets-generator/config'

import { defineConfig } from '@vite-pwa/assets-generator/config'

const newPreset: Preset = {
    transparent: {
        sizes: [64, 192, 512],
        favicons: [[48, 'favicon.ico'], [96, 'favicon-96x96.ico']]
    },
    maskable: {
        sizes: [512]
    },
    apple: {
        sizes: [180]
    }
}

export default defineConfig({
    headLinkOptions: {
        preset: 'default',
    },
    preset: newPreset,
    images: ['public/favicon.svg'],
})