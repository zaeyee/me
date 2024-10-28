import {
  defineConfig,
  presetUno,
  presetIcons,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'u-clickable': 'op-70 cursor-pointer duration-300 hover:op-100',
    'u-icon-btn': 'u-clickable inline-flex p-2.5'
  },
  theme: {
    container: {
      center: true,
      padding: '1rem',
      maxWidth: { sm: '640px', md: '768px', lg: '1024px', xl: '1096px', '2xl': '1096px' }
    }
  },
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        width: '1.125em',
        height: '1.125em',
        'vertical-align': 'middle'
      }
    }),
    presetTypography({
      cssExtend: {
        h1: {
          'font-weight': 800,
          'margin-bottom': '2rem'
        },
        p: {
          margin: '1.25em 0'
        },
        a: {
          'text-decoration': 'none',
          'border-bottom': '1px solid rgba(125, 125, 125, .3)',
          transition: 'border .3s ease-in-out'
        },
        'a:hover': {
          'border-bottom-color': 'var(--un-prose-links)'
        },
        hr: {
          width: '50px',
          margin: '2em auto',
          'border-color': 'rgba(125, 125, 125, .3)',
          'border-bottom': 'none'
        }
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
