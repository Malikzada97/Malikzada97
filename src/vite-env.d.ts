/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA4_MEASUREMENT_ID: string
  readonly VITE_GTM_ID: string
  readonly VITE_FACEBOOK_PIXEL_ID: string
  readonly VITE_LINKEDIN_INSIGHT_ID: string
  readonly VITE_VAPID_PUBLIC_KEY: string
  readonly DEV: boolean
  readonly PROD: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 