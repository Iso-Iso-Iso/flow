import React from "react";

import {
  SideBar,
  SideContent,
  Title,
  Link,
  SideBarWrapper,
} from "@layouts/side-bar";

import { ContentsGrid, ContentsItem } from "@layouts/contents";
import { CardGrid, Card } from "@/layouts/card-grid";
import Section from "@layouts/section";

function LessonsSingle() {
  return (
    <SideBarWrapper>
      <SideBar>
        <Title>Оглавление</Title>
        <Link active to="#">
          1. Начало
        </Link>
      </SideBar>
      <SideContent>
        <h1 className="mb-big">Название темы</h1>
        <Section title="Подтема">
          tecto. Voluptatem odio repellendus rerum impedit cum, itaque expedita
          quasi praesentium eius laudantium soluta dolorem fuga ratione commodi
          amet hic et ducimus, dolor, esse porro ea? Unde fuga maiores cum quae.
          Necessitatibus, reiciendis et? At explicabo, perspiciatis recusandae
          ducimus quaerat saepe et provident, exercitationem maxime eius
          voluptatem minus possimus facilis dolorum repellendus consectetur
          temporibus earum cum quae animi sequi. Aut, culpa? Corporis dolor
          sequi pуossimus doloremque? At laborum culpa quidem quam obcaecati,
          recusandae sequi rerum officia est doloremque dolor possimus ad nobis
          excepturi hic, nostrum sunt quaerat quod tempora eius ea?
        </Section>

        <Section title="Подтема 2">
          tecto. Voluptatem odio repellendus rerum impedit cum, itaque expedita
          quasi praesentium eius laudantium soluta dolorem fuga ratione commodi
          amet hic et ducimus, dolor, esse porro ea? Unde fuga maiores cum quae.
          Necessitatibus, reiciendis et? At explicabo, perspiciatis recusandae
          ducimus quaerat saepe et provident, exercitationem maxime eius
          voluptatem minus possimus facilis dolorum repellendus consectetur
          temporibus earum cum quae animi sequi. Aut, culpa? Corporis dolor
          sequi possimus doloremque? At laborum culpa quidem quam obcaecati,
          recusandae sequi rerum officia est doloremque dolor possimus ad nobis
          excepturi hic, nostrum sunt quaerat quod tempora eius ea?
        </Section>

        <Section>
          <ContentsGrid title="Темы раздела">
            <ContentsItem to="#">Past Simple</ContentsItem>
            <ContentsItem to="#">Present Simple</ContentsItem>
            <ContentsItem to="#">Future Simple</ContentsItem>
            <ContentsItem to="#">Past Progressive</ContentsItem>
          </ContentsGrid>
        </Section>
        <Section title="тесты для закрепления знаний">
          <CardGrid>
            <Card> Тесты 1</Card>
            <Card> Тесты 2</Card>
            <Card> Тесты 3</Card>
          </CardGrid>
        </Section>
      </SideContent>
    </SideBarWrapper>
  );
}

export default LessonsSingle;
