import { getAllCharachters } from '@/entities/StarWars/model/starwarsThunk';
import CharachterCard from '@/entities/StarWars/ui/CharachterCard';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { Box, Button, CircularProgress, Grid, Typography, Container } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import {
  pageStyles,
  titleStyles,
  loaderContainerStyles,
  loaderStyles,
  containerStyles,
  contentContainerStyles,
  cardsWrapperStyles,
  gridContainerStyles,
} from './AllCharachtersPage.styles';
import {
  paginationContainerStyles,
  pageInfoStyles,
  navButtonStyles,
  pageButtonStyles,
  pagesContainerStyles,
} from './Pagination.styles';
import { useNavigate } from 'react-router';

export default function AllCharachtersPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const charachters = useAppSelector((store) => store.starwars.charachters);
  const loading = useAppSelector((store) => store.starwars.loading);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(charachters.length / itemsPerPage)),
    [charachters.length, itemsPerPage],
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const visibleCharachters = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return charachters.slice(startIndex, startIndex + itemsPerPage);
  }, [charachters, currentPage, itemsPerPage]);

  const handlePreviousPage = (): void => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = (): void => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const handlePageSelect = (page: number): void => {
    setCurrentPage(page);
  };

  useEffect(() => {
    void dispatch(getAllCharachters());
  }, [dispatch]);

  return (
    <Box sx={pageStyles}>
      <Container maxWidth="xl" sx={containerStyles}>
        <Typography variant="h2" sx={titleStyles}>
          Star Wars Characters
        </Typography>

        {loading ? (
          <Box sx={loaderContainerStyles}>
            <CircularProgress size={60} sx={loaderStyles} />
          </Box>
        ) : (
          <Box sx={contentContainerStyles}>
            <Box sx={cardsWrapperStyles}>
              <Grid container spacing={4} justifyContent="center" sx={gridContainerStyles}>
                {visibleCharachters.map((charachter) => (
                  <Grid
                    size={{ xs: 12, sm: 6, md: 4 }}
                    key={charachter.name}
                    onClick={() => navigate(`/charachter/${charachter.name}`)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <CharachterCard charachter={charachter} />
                  </Grid>
                ))}
              </Grid>
            </Box>

            {charachters.length > 0 && (
              <Box sx={paginationContainerStyles}>
                <Button
                  variant="outlined"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  sx={navButtonStyles}
                >
                  Previous
                </Button>

                <Typography sx={pageInfoStyles}>
                  Page {currentPage} of {totalPages}
                </Typography>

                <Button
                  variant="outlined"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  sx={navButtonStyles}
                >
                  Next
                </Button>

                {totalPages > 1 && (
                  <Box sx={pagesContainerStyles}>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                      (pageNumber) => (
                        <Button
                          key={pageNumber}
                          variant={pageNumber === currentPage ? 'contained' : 'outlined'}
                          onClick={() => handlePageSelect(pageNumber)}
                          sx={pageButtonStyles}
                        >
                          {pageNumber}
                        </Button>
                      ),
                    )}
                  </Box>
                )}
              </Box>
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
}
