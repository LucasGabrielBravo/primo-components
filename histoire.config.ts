import { HstSvelte } from '@histoire/plugin-svelte'
import { defineConfig } from 'histoire'

export default defineConfig({  
  plugins: [
    HstSvelte(),
  ],
  setupFile: '/src/histoire.setup.ts',
  storyIgnored: ['**/node_modules/**', '**/dist/**', '.env*', "**/.svelte-kit/**"],
})
