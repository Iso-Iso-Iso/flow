import React from "react";
import Section from "@common/section";
import SecondaryTitle from "@components/common/secondary-title";
import Chapter from "@common/chapter";
import ChapterItem from "@common/chapter-item";

function Contents() {
  return (
    <Section>
      <SecondaryTitle>Разделы</SecondaryTitle>
      <Chapter title="title">
        <ChapterItem to="/">Какая-то тема</ChapterItem>
        <ChapterItem to="/">Какая-то тема</ChapterItem>
        <ChapterItem to="/">Какая-то тема</ChapterItem>
        <ChapterItem to="/">Какая-то тема</ChapterItem>
      </Chapter>
    </Section>
  );
}

export default Contents;
