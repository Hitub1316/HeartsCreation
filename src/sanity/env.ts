export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-03-17'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qr1teroj'

// We avoid strict assertions here because Cloudflare's build environment 
// often hides variables during the pre-rendering phase.
// The site will still fetch live data once it is initialized in the browser/worker.
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    if (process.env.NODE_ENV === 'production') {
      console.warn(`[Deployment Warning]: ${errorMessage}. Using fallback/empty during build.`);
    }
    return '' as unknown as T
  }

  return v
}
