import { nuxt, stefanobartoletti, tailwind } from '@stefanobartoletti/eslint-config'

export default stefanobartoletti(
  {
    ignores: [
      '**/public/**/*',
    ],
  },
  nuxt,
  tailwind,
)
