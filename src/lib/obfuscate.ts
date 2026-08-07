const KEY = 42

export function encodeEmail(email: string): string {
  return Array.from(email)
    .map((char) => char.charCodeAt(0) ^ KEY)
    .map((code) => code.toString(16).padStart(2, '0'))
    .join('')
}

export function decodeEmail(encoded: string): string {
  const bytes = encoded.match(/.{1,2}/g) ?? []
  return bytes.map((hex) => String.fromCharCode(parseInt(hex, 16) ^ KEY)).join('')
}
