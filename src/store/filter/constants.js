export const statusFilters = Object.freeze({
  all: { priority: null, statusText: 'Show all' },
  none: { priority: 'without', statusText: 'Without priority' },
  low: { priority: 'low', statusText: 'Low' },
  medium: { priority: 'medium', statusText: 'Medium' },
  high: { priority: 'high', statusText: 'High' },
});
