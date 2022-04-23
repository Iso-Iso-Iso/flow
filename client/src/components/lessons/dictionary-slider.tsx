import React from "react";

import { SwiperSlide } from "swiper/react";

import Card from "@components/lessons/card";
import Section from "@common/section";
import CardSlider from "@common/card-slider";
import ArticleTitle from "@components/common/secondary-title";

function DictionarySlider() {
  return (
    <Section>
      <ArticleTitle>Карточки-словари</ArticleTitle>

      <CardSlider>
        <SwiperSlide>
          <Card> Название</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card> Название</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card> Название</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card> Название</Card>
        </SwiperSlide>
      </CardSlider>
    </Section>
  );
}

export default DictionarySlider;
