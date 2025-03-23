import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import {LOCALE} from "../consts"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat(LOCALE.langTag, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}



export function numberWithCommas(x: number): string {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export function readingTime(html: string) {
  const textOnly = html?.replace(/<[^>]+>/g, '')
  const wordCount = textOnly?.split(/\s+/).length
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed()
  return `${readingTimeMinutes} mins read`
}
