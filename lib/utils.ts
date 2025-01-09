import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//used for converting URLs to texts with spaces
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ''); // Remove non-alphanumeric characters
}

export function truncateWord(title: string, wordLimit: number) {
  const words = title.split(' ');
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(' ') + '...'
    : title;
}

export function truncateByCharacters(title: string, charLimit: number) {
  return title.length > charLimit ? title.slice(0, charLimit) + '...' : title;
}

export function convertToPlainText(htmlContent: string): string {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;

  // Get the text content and trim any leading/trailing whitespace
  let textContent = tempDiv.textContent || tempDiv.innerText || '';

  // Replace multiple spaces (including &nbsp;) with a single space
  textContent = textContent
    .replace(/\u00A0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return textContent;
}

export function formatDate(dateString: Date): string {
  const date = new Date(dateString);
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}-${date.getFullYear()}`;

  // console.log(formattedDate); // Output: '26-07-2024'
  return formattedDate;
}

export const formatTime = (time: string): string => {
  return time.slice(0, 5); // Extracts the first 5 characters (HH:MM)
};

export const formatDateToText = (dateString: string | undefined): string => {
  if (!dateString) {
    return 'Invalid date'; // Handle undefined or empty input
  }

  try {
    // Parse the string into components
    const [year, month, day] = dateString.split('-').map(Number);
    if (!year || !month || !day) {
      throw new Error('Invalid date format');
    }

    // Create a new Date object using the parsed components
    const date = new Date(year, month - 1, day); // JavaScript months are zero-indexed

    // Format the date
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return 'Invalid date'; // Fallback for unexpected formats or errors
  }
};

// Example usage
// const inputDate = '2024-11-13'; // Change this to test different inputs
// const formattedDate = formatDate(inputDate);
// console.log(formattedDate); // Output: "November 13, 2024"
