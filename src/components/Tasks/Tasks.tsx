import React, {useState} from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {
  Cart,
  Container,
  ContainerTitleAndDate,
  Button,
  Line,
  Title,
  Date,
  ContainerButtons,
  Priority,
  Accordion,
  LineAccordion,
  ContainerAccordion,
  ContentDescrition,
  Description,
  ContainerButton,
  ContentButton,
  Image,
} from './styles';
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CheckCircle,
  Trash,
  NotePencil,
} from 'phosphor-react-native';
import {colors} from '../../styles/colors';
import vazio from '../../assets/undraw_No_data_re_kwbl.png';

interface IProps {
  color: string;
  title: string;
  description?: string;
  priority: string;
  date: string;
}

export default function Tasks({
  color,
  title,
  description,
  date,
  priority,
}: IProps) {
  const [isActivit, setisActivit] = useState<boolean>(true);
  return (
    <>
      <Collapse
        onToggle={() => {
          setisActivit(!isActivit);
        }}>
        <CollapseHeader>
          <Cart>
            <Line isColor={color} />
            <Container>
              <ContainerTitleAndDate>
                <Title numberOfLines={1}>{title}</Title>
                <Date>{date}</Date>
                <Priority>Prioridade: {priority}</Priority>
              </ContainerTitleAndDate>
              <ContainerButtons>
                {isActivit ? (
                  <ArrowCircleDown color={colors.roxo} size={36} />
                ) : (
                  <ArrowCircleUp color={colors.roxo} size={36} />
                )}
              </ContainerButtons>
            </Container>
          </Cart>
        </CollapseHeader>
        <CollapseBody>
          <Accordion>
            <LineAccordion isColor={color} isActivit={isActivit} />
            <ContainerAccordion>
              <ContentDescrition>
                {description ? (
                  <Description>{description}</Description>
                ) : (
                  <>
                    <Title>Nenhuma descrição...</Title>
                    <Image source={vazio} />
                  </>
                )}
              </ContentDescrition>
              <ContainerButton>
                <ContentButton>
                  <Button isColor={colors.red}>
                    <Trash color={colors.red} size={22} />
                  </Button>
                  <Description>Apagar</Description>
                </ContentButton>
                <ContentButton>
                  <Button isColor={colors.white}>
                    <NotePencil color={colors.white} size={22} />
                  </Button>
                  <Description>Editar</Description>
                </ContentButton>
                <ContentButton>
                  <Button isColor={colors.roxo}>
                    <CheckCircle color={colors.roxo} size={22} />
                  </Button>
                  <Description>Feito</Description>
                </ContentButton>
              </ContainerButton>
            </ContainerAccordion>
          </Accordion>
        </CollapseBody>
      </Collapse>
    </>
  );
}
