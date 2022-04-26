import React from "react";

import { SwiperSlide } from "swiper/react";

import { Card, CardSlider } from "@layouts/card-slider";

import Section from "@layouts/section";

import Stub from "@components/card-stub";

function DictionarySlider() {
  return (
    <Section title="Карточки-словари">
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
        <SwiperSlide>
          <Stub to="">Все словари</Stub>
        </SwiperSlide>
      </CardSlider>
    </Section>
  );
}

export default DictionarySlider;
