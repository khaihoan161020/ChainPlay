import { iconChevonLeft, iconChevonRight } from "@/constants/icon";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  totalRows: number;
  searchParams: {
    page: string;
    blockChain: string | undefined;
    search: string | undefined
  };
}
export default function Pagination({
  currentPage,
  totalPage,
  searchParams,
  totalRows
}: PaginationProps) {
  const { blockChain, search } = searchParams;
  const LIMIT = 10;
  const styleNodeItem = `w-8 h-8 inline-block rounded-lg  text-center leading-8 dark:text-white-gray`;

  const truncate = 1;
  const range = 3;
  const numberTruncateLeft =
    currentPage - truncate < 0 ? currentPage : currentPage - truncate;
  const numberTruncateRight = currentPage + truncate;

  let active = false;
  const stack: any = [];
  let countTruncate = 0;
  const renderPos = () => {
    for (let pos = 1; pos <= totalPage; pos++) {
      active = pos === currentPage;
      // truncate
      if (totalPage <= range)
        stack.push({
          pos,
          active,
        });
      if (totalPage >= 2 * range - 1 && truncate) {
        if (
          numberTruncateLeft > range &&
          numberTruncateRight < totalPage - range + 1
        ) {
          // truncate 2 side
          if (
            (pos >= numberTruncateLeft && pos <= numberTruncateRight) ||
            pos === 1 ||
            pos === totalPage
          ) {
            // renderTwoSide += renderPage(pos, active);
            stack.push({
              pos,
              active,
            });
          } else {
            if (
              pos === numberTruncateLeft - 1 ||
              pos === numberTruncateRight + 1
            )
              stack.push({
                pos: "...",
                active,
              });
          }
        } else {
          // truncate left side or right side
          if (
            (currentPage <= range + 1 && pos <= range) ||
            (currentPage <= numberTruncateRight &&
              pos <= numberTruncateRight &&
              currentPage >= numberTruncateLeft &&
              pos >= numberTruncateLeft) ||
            pos === totalPage ||
            pos === 1
          ) {
            stack.push({
              pos,
              active,
            });
          } else {
            countTruncate++;
            if (countTruncate === 1)
              stack.push({
                pos: "...",
                active,
              });
          }
        }
      }
    }
  };

  renderPos();

  const linkSearchParam = (page: number) => {
    let params = new URLSearchParams();
    params.append("page", page.toString());
    if (blockChain) params.append("blockChain", blockChain);
    if (search) params.append("search", search);

    return `?${params}`;
  };
  return (
    <div className="flex justify-center relative my-6">
      <p className="absolute top-0 left-0 dark:text-white-gray">
        Showing {(currentPage - 1) * LIMIT} - {currentPage * LIMIT > totalRows ? totalRows : currentPage * LIMIT} out of{" "}
        {totalRows}
      </p>
      <div className="flex items-center gap-1">
        <Link
          href={linkSearchParam(
            currentPage > 1 ? currentPage - 1 : currentPage
          )}
          className={`${styleNodeItem}`}
        >
          {iconChevonLeft}
        </Link>
        {stack.map((e: any, index: number) => (
          <Link
            className={`${styleNodeItem} ${
              e.active && "bg-dark-rose text-white"
            } `}
            key={index}
            href={linkSearchParam(e.pos !== "..." ? e.pos : currentPage)}
          >
            {e.pos}
          </Link>
        ))}
        <Link
          href={linkSearchParam(
            currentPage === totalPage ? currentPage : currentPage + 1
          )}
          className={`${styleNodeItem}`}
        >
          {iconChevonRight}
        </Link>
      </div>
    </div>
  );
}
