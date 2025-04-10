import Link from "next/link";
import styles from "./pagination.module.css";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    basePath: string;
    maxVisiblePages?: number;
}

export default function Pagination({ currentPage, totalPages, basePath, maxVisiblePages = 5 }: PaginationProps ) {
    function getPageNumbers(current: number, total: number, max: number): (number | "...")[] {
        const pages: (number | "...")[] = [];

        if (total <= max) {
            return Array.from({ length: total }, (_, i) => i + 1);
        }

        const half = Math.floor(max / 2);
        let start = Math.max(2, current - half);
        let end = Math.min(total - 1, current + half);

        if (current <= half + 1) {
            start = 2;
            end = max - 1;
        }

        if (current >= total - half) {
            start = total - (max - 2);
            end = total - 1;
        }

        pages.push(1);
        if (start > 2) pages.push("...");

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < total - 1) pages.push("...");
        pages.push(total);

        return pages;
    }

    const pageNumbers = getPageNumbers(currentPage, totalPages, maxVisiblePages);

    return (
        <nav className={styles.pagination}>
            <Link href={`${basePath}?page=${currentPage - 1}`} className={`${styles.pageButton} ${styles.prev} ${currentPage === 1 ? styles.disabled : ""}`} aria-disabled={currentPage === 1}>
                Previous
            </Link>

            {pageNumbers.map((page, i) =>
                page === "..." ? (
                        <span key={i} className={styles.ellipsis}>
                            ...
                        </span>
                ) : (
                    <Link key={i} href={`${basePath}?page=${page}`} className={`${styles.pageNumber} ${page === currentPage ? styles.active : ""}`}>
                        {page}
                    </Link>
                )
            )}

            <Link href={`${basePath}?page=${currentPage + 1}`} className={`${styles.pageButton} ${styles.next} ${currentPage === totalPages ? styles.disabled : ""}`} aria-disabled={currentPage === totalPages}>
                Next
            </Link>
        </nav>
    );
}
