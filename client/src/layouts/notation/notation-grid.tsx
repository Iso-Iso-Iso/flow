import React, { ReactNode, useMemo } from "react";

import Button from "@components/button";

import "./notation-grid.scss";

// TODO: move in interface folder

interface Props {
  children: ReactNode;
  onPrevBtnClick: () => any;
  onNextBtnClick: () => any;
  currentPage: number;
  maxPage: number;
}

function NotationGrid(props: Props) {
  const { currentPage, maxPage, children, onNextBtnClick, onPrevBtnClick } =
    props;

  const isPrevBtnDisabled = useMemo(() => {
    return currentPage === 1 ? true : false;
  }, [currentPage]);

  const isNextBtnDisabled = useMemo(() => {
    return currentPage === maxPage ? true : false;
  }, [currentPage, maxPage]);

  return (
    <>
      <div className="notation-grid">{children}</div>
      <div className="notation-grid__pagination">
        <Button
          onClick={onPrevBtnClick}
          disabled={isPrevBtnDisabled}
          className="mr-small"
        >
          prev
        </Button>
        <div className=" mr-small">
          {currentPage}/{maxPage}
        </div>
        <Button onClick={onNextBtnClick} disabled={isNextBtnDisabled}>
          {" "}
          next
        </Button>
      </div>
    </>
  );
}

export default NotationGrid;
