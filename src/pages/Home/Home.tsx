import React from 'react';
import {Container, ViewListTask} from './styles';
import {ScrollView} from 'react-native';
import Status from '../../components/Status/Status';
import Button from '../../components/Button/Button';
import Tasks from '../../components/Tasks/Tasks';

const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Button />
      <Status />
      <ScrollView>
        <ViewListTask>
          <Tasks
            color="#ff0000"
            title="Fazer atividade de fisica e de historia ao mesmo tempo"
            date="12/11 as 18:00h"
            priority="Alta"
            description="Fazer atividade de fisica e de historia aoFazer atividade de fisica e de historia ao  Fazer atividade de fisica e de historia ao "
          />
          <Tasks
            color="#366EFF"
            title="Fazer atividade"
            date="12/11 as 18:00h"
            priority="Baixa"
          />
          <Tasks
            color="#366EFF"
            title="Fazer atividade"
            date="12/11 as 18:00h"
            priority="Baixa"
          />
          <Tasks
            color="#ffff00"
            title="Fazer atividade"
            date="12/11 as 18:00h"
            priority="Média"
          />
          <Tasks
            color="#ff0000"
            title="Fazer atividade"
            date="12/11 as 18:00h"
            priority="Alta"
          />
          <Tasks
            color="#366EFF"
            title="Fazer atividade"
            date="12/11 as 18:00h"
            priority="Baixa"
          />
          <Tasks
            color="#ff0000"
            title="Fazer atividade"
            date="12/11 as 18:00h"
            priority="Alta"
          />
          <Tasks
            color="#ff0000"
            title="Fazer atividade"
            date="12/11 as 18:00h"
            priority="Alta"
          />
          <Tasks
            color="#ffff00"
            title="Fazer atividade"
            date="12/11 as 18:00h"
            priority="Média"
          />
        </ViewListTask>
      </ScrollView>
    </Container>
  );
};

export default Home;
