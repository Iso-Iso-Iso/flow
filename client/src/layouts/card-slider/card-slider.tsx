import React, { ReactNode } from "react";

import "swiper/css/pagination";
import slider from "./card-slider.module.scss";

import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { PropsWithChildren } from "@interfaces/components/index";
import { PaginationOptions } from "swiper/types/modules/pagination";

import Button from "@components/button";
import IconArrow from "@icons/arrow";

function CardSlider({ children }: PropsWithChildren) {
  const breakPoints = {
    1024: {
      slidesPerView: 2.4,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2.2,
      spaceBetween: 15,
    },
    425: { slidesPerView: 1.2 },
    0: { slidesPerView: 1, spaceBetween: 10 },
  };

  const pagination: PaginationOptions = {
    el: ".swiper-pagination",
    type: "bullets",
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className={"mb-medium " + slider.slider}
        updateOnWindowResize={true}
        breakpoints={breakPoints}
      >
        {children as ReactNode}
      </Swiper>

      <div className={"flex-space " + slider.controllers}>
        <div className={"swiper-pagination " + slider.pagination}></div>
        <div className={slider.navigation}>
          <div className="swiper-button-prev">
            <Button>
              <IconArrow />
            </Button>
          </div>
          <div className="swiper-button-next">
            <Button>
              <IconArrow />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
