import React from "react";

import "./test-placeholder.scss";

import Section from "@layouts/section";
import { CardGrid, Card } from "@layouts/card-grid";

import Stub from "@components/card-stub";

function TestPlaceholder() {
  return (
    <Section title="Тесты для проверки знаний">
      <CardGrid>
        <Card>Title</Card>
        <Card>Title</Card>
        <Card>Title</Card>
        <Card>Title</Card>
        <Stub to="">Все тесты</Stub>
      </CardGrid>
    </Section>
  );
}

export default TestPlaceholder;
