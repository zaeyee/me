import withNuxt from './.nuxt/eslint.config.mjs'
import unocss from '@unocss/eslint-config/flat'

export default withNuxt(unocss, {
  rules: {
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': ['error', { html: { void: 'always' } }]
  }
})
