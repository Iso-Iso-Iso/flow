import React, { useState, useEffect } from "react";

import { NotationGrid, NotationItem } from "@layouts/notation";
import { useSearchParams } from "react-router-dom";

// TODO add to paginating protect condition

function AdminLessons() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = 3;

  useEffect(() => {
    const currnetPage = Number(searchParams.get("p") || 1);

    // TODO? if i find better way i will refactor this!

    if (currnetPage > maxPage) {
      searchParams.set("p", "1");
      const updatedSearchParams = Object.fromEntries(searchParams.entries());
      setSearchParams(updatedSearchParams);
    }

    setCurrentPage(currnetPage);
  }, [searchParams, setSearchParams]);

  //   TODO! refactor this without full params reset
  return (
    <NotationGrid
      maxPage={maxPage}
      currentPage={currentPage}
      onPrevBtnClick={() => {
        setSearchParams({ p: currentPage - 1 + "" });
      }}
      onNextBtnClick={() => {
        setSearchParams({ p: currentPage + 1 + "" });
      }}
    >
      <NotationItem />
      <NotationItem />
      <NotationItem />
    </NotationGrid>
  );
}

export default AdminLessons;
