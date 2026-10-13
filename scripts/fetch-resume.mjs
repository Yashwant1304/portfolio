// One-off helper: download the Drive PDF and dump its text so the resume
// can be read into data.js. Not part of the site build.
import { writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const FILE_ID = '19mlSjlsROnp164wKDqvRNkI5Wq1SNOyY'
const require = createRequire(import.meta.url)

const urls = [
  `https://drive.google.com/uc?export=download&id=${FILE_ID}`,
  `https://drive.usercontent.google.com/download?id=${FILE_ID}&export=download&confirm=t`,
]

let buf = null
for (const url of urls) {
  const res = await fetch(url, { redirect: 'follow' })
  if (!res.ok) continue
  const bytes = Buffer.from(await res.arrayBuffer())
  // Confirm it really is a PDF, not an HTML virus-scan warning page
  if (bytes.subarray(0, 5).toString() === '%PDF-') {
    buf = bytes
    break
  }
  console.log(`Not a PDF from ${url} (got ${bytes.length} bytes, starts ${JSON.stringify(bytes.subarray(0, 40).toString())})`)
}

if (!buf) {
  console.error('Could not download the PDF. Check sharing is "Anyone with the link".')
  process.exit(1)
}

writeFileSync('resume.pdf', buf)
console.log(`Saved resume.pdf (${(buf.length / 1024).toFixed(0)} KB)`)

const { PDFParse } = require('pdf-parse')
const parser = new PDFParse({ data: new Uint8Array(buf) })
const result = await parser.getText()
writeFileSync('resume.txt', result.text, 'utf8')
console.log('Saved resume.txt')