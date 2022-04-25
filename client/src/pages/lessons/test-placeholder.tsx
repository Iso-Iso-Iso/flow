import React from "react";

import "./test-placeholder.scss";

import { Section, SectionTitle } from "@layouts/section";
import { CardGrid, Card } from "@layouts/card-grid";

import Stub from "@components/card-stub";

function TestPlaceholder() {
  return (
    <Section>
      <div className="test-placeholder">
        <SectionTitle>Тесты для проверки знаний</SectionTitle>
        <CardGrid>
          <Card>Title</Card>
          <Card>Title</Card>
          <Card>Title</Card>
          <Card>Title</Card>
          <Stub to="">Все тесты</Stub>
        </CardGrid>
      </div>
    </Section>
  );
}

export default TestPlaceholder;
