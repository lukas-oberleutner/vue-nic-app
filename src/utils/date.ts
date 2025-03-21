// Format date
export const formatDate = (dateString?: string | null) => {
  if (!dateString) return 'N/A';

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid date';

  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'UTC',
  });
};
