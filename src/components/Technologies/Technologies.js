import React from "react";
import { DiNodejs, DiPostgresql, DiReact } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { SiRealm, SiNextDotJs, SiTypescript } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technoligies. I am able to write from
      back-end databases to front-end displays.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React.js/React Native</ListTitle>
          <ListParagraph>
            Experience with React.js and React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTypescript size="3rem" />
        <ListContainer>
          <ListTitle>Typescript</ListTitle>
          <ListParagraph>Experience with using Typescrpt</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextDotJs size="3rem" />
        <ListContainer>
          <ListTitle>Next.js</ListTitle>
          <ListParagraph>Experience with Next.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>Node/Express.js</ListTitle>
          <ListParagraph>Experience with Node and Express.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GrGraphQl size="3rem" />
        <ListContainer>
          <ListTitle>GraphQl</ListTitle>
          <ListParagraph>
            Experience with GrapQl middleware and using it in the front-end.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPostgresql size="3rem" />
        <ListContainer>
          <ListTitle>Postgresql</ListTitle>
          <ListParagraph>Experience with Node and Express.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiRealm size="3rem" />
        <ListContainer>
          <ListTitle>Realm.io</ListTitle>
          <ListParagraph>Experience with Realm mobile database</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
