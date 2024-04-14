'use client';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationComponentProps {
    artworkCount: number;
}

const ARTWORKS_PER_PAGE = 8;

export const PaginationComponent = ({ artworkCount }: PaginationComponentProps) => {
    const path = usePathname();
    const searchParams = useSearchParams();

    const pageNumber = Number(searchParams.get('page')) || 1;
    const totalPages = Math.ceil(artworkCount / ARTWORKS_PER_PAGE);

    const renderPaginationLinks = () => {
        const paginationLinks = [];

        if (pageNumber > 2) {
            paginationLinks.push(<PaginationEllipsis key="ellipsis-back" />);
        }

        // Render link for previous page if current page is not the first page
        if (pageNumber > 1) {
            paginationLinks.push(
                <PaginationItem key="previous">
                    <PaginationLink href={`${path}?page=${pageNumber - 1}`}>{pageNumber - 1}</PaginationLink>
                </PaginationItem>
            );
        }

        // Render link for current page
        paginationLinks.push(
            <PaginationItem key={pageNumber}>
                <PaginationLink href={`${path}?page=${pageNumber}`} isActive className="pointer-events-none">
                    {pageNumber}
                </PaginationLink>
            </PaginationItem>
        );

        // Render link for next page if current page is not the last page
        if (pageNumber < totalPages) {
            paginationLinks.push(
                <PaginationItem key="next">
                    <PaginationLink href={`${path}?page=${pageNumber + 1}`}>{pageNumber + 1}</PaginationLink>
                </PaginationItem>
            );
        }

        if (totalPages - pageNumber > 1) {
            paginationLinks.push(<PaginationEllipsis key="ellipsis-next" />);
        }

        return paginationLinks;
    };

    return (
        <Pagination className="mt-4">
            <PaginationContent>
                {pageNumber > 1 && (
                    <PaginationItem>
                        <PaginationPrevious href={`${path}?page=${pageNumber - 1}`} />
                    </PaginationItem>
                )}
                {renderPaginationLinks()}
                {pageNumber < totalPages && (
                    <PaginationItem>
                        <PaginationNext href={`${path}?page=${pageNumber + 1}`} />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
};
