import React from "react";

import SectionWrapper from "./section-wrapper";
import SectionTitle from "./section-title";

import { SectionProps } from "@interfaces/components/section";

function Section(props: SectionProps) {
  const { title = "", children } = props;

  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
}

export default Section;
