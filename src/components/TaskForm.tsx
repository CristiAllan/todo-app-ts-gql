import React from 'react'
import { useForm } from "react-hook-form"
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import styled from 'styled-components'

interface FormData {
  taskName: string
}

const TaskForm = () => {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>()

  const onSubmit = handleSubmit(({ taskName }) => {
    // aqui vem a logica pra fazer requisição com apollo
    console.log(taskName)
  })

  return (
    <>
      <Card style={{ padding: '20px 20px' }}>
        <form onSubmit={onSubmit}>
          <CardContent>
            <h3>Criar tarefa</h3>
            <MyInput name="taskName" ref={register} placeholder="Digite o nome da tarefa" />
          </CardContent>

          <CardActions>
            <Button variant="contained" color="primary" type="submit">
              Criar Tarefa
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  )
}

const MyInput = styled.input`
width: calc(100% - 70px);
display: block;
border: 1px solid #acacac;
padding: 14px 14px 14px 45px;
margin-top: 15px;
font-size: 16px;
`

export default TaskForm
