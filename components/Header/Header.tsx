import styled from "styled-components";
import { LinkBlock } from "./LinkBlock/LinkBlock";
import { LangSelect } from "components/LangSelect/LangSelect";
import {useTranslation} from '../../hooks/useTranslation';

export const Header = () => {
    const {t} = useTranslation();
return(
    <Navbar>
        <LinkBlock  title={""}/>
        <LinkBlock link={t.navBar.characters}  title={"Characters"}/>
        <LinkBlock link={t.navBar.locations}  title={"Locations"}/>
        <LinkBlock link={t.navBar.episodes}  title={"Episodes"}/>
        <LinkBlock link={t.navBar.test}  title={"Test"}/>
        <LinkBlock  link={t.navBar.private} title={"Private"}/>
        <LangSelect/>
    </Navbar>
)
};

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
  }
`;
