import { stefanobartoletti, tailwind, vue } from '@stefanobartoletti/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .prepend(
    stefanobartoletti(
      {
        ignores: [
          '**/public/**/*',
        ],
      }, // Options, required
      vue,
      tailwind,
    ),
  )
