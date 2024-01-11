"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 10;
  const params = new URLSearchParams(searchParams);

  const hasPrev = limit * (parseInt(page) - 1) > 0;
  const hasNext = limit * (parseInt(page) - 1) + limit < count;

  const handleChangePage = (type) => {
    if (type === "prev") {
      params.set("page", parseInt(page) - 1);
    } else {
      params.set("page", parseInt(page) + 1);
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
