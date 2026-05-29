/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** "true" only on the staging/preview build (set via netlify.toml). */
  readonly VITE_STAGING?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
