export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skKsHWwwh1pAqLS46lNh28rouETJciE41iyXMqhP3ku9fFcJpWE7VACbCYAuFSmA9mX2SrDvdnd2SfIsNcGBGKhQU1YiTf8YjnP1IRCEyFYCWLeVmS0HaS9CwBZr2JHKuonRPsXLegGQ3jlacM8iaxILfBWLwGmh7aUHDBZp30UpLEynJP4L",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
