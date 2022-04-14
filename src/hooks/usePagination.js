import { useMemo } from 'react';

export function usePagination({
  totalCount,
  pageSize,
  currentPage
}) {
  const paginationRange = useMemo(() => {
    // Our implementation logic will go here 
     
  }, [totalCount, pageSize, currentPage]);

  return paginationRange;
}
