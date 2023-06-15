export const appConfig = {
  apiEndpoint:
    process.env.NEXT_PUBLIC_API_ENDPOINT ||
    'https://nirinasoa-herilanto.vercel.app',
  paginationPerPage: process.env.NEXT_PUBLIC_PAGINATED_PER_PAGE || 6,
};
