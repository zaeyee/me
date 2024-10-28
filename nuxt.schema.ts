import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    logo: group({
      title: 'Logo',
      description: 'Header logo configuration.',
      icon: 'i-mdi:image-filter-center-focus-strong-outline',
      fields: {
        light: field({
          type: 'media',
          title: 'Light Mode Logo',
          description: 'Pick an image from your gallery.',
          icon: 'i-mdi:white-balance-sunny',
          default: ''
        }),
        dark: field({
          type: 'media',
          title: 'Dark Mode Logo',
          description: 'Pick an image from your gallery.',
          icon: 'i-mdi:moon-waning-crescent',
          default: ''
        }),
        alt: field({
          type: 'string',
          title: 'Alt',
          description: 'Alt to display for accessibility.',
          icon: 'i-mdi:alphabet-latin',
          default: ''
        })
      }
    })
  }
})
