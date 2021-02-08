import React from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles';

import TaskForm from './components/TaskForm'
import Tasks from './components/Tasks'

function App() {
  return (
    <>
      <MyContainer>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TaskForm />
            </Grid>

            <Grid item xs={12}>
              <Tasks />
            </Grid>
          </Grid>
          </Container>
      </MyContainer>
      <GlobalStyles />
    </>
  );
}

const MyContainer = styled.div`
`

export default App;
