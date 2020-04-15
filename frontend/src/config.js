export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:4000'
    : 'http://localhost:4000';

export const PAGE_LIMIT = 8;
