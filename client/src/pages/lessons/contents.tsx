import React from "react";

import Section from "@layouts/section";
import { ContentsGrid, ContentsItem } from "@layouts/contents";

import ROUTER from "@routes/index";

function Contents() {
  const contents = [
    {
      title: "Title",
      body: [
        { to: "/", title: "awdoiwadoijawoijjoi wad" },
        { to: "/", title: "afwwaf awf" },
        { to: "/", title: "awfawf wafaf waf" },
        { to: "/", title: "awfawffw2" },
      ],
    },
  ];

  return (
    <Section title="Разделы">
      {contents.map((item, index) => {
        return (
          <ContentsGrid key={item.title} title={index + 1 + ". " + item.title}>
            {item.body.map((item, index) => (
              <ContentsItem key={index} to={ROUTER.LESSONS_SINGLE + index}>
                {index + 1 + ". " + item.title}
              </ContentsItem>
            ))}
          </ContentsGrid>
        );
      })}
    </Section>
  );
}

export default Contents;
