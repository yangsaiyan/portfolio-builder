/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CAPTCHA_SITE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
