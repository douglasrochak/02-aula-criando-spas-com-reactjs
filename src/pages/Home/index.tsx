import { Play } from "phosphor-react";
import {
  CounterdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./style";

export function Home() {
  return (
    <HomeContainer>
      <form id="pomodoroForm" action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            placeholder="Dé um nome para seu projeto"
            type="text"
            id="task"
          />
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            placeholder="00"
            type="number"
            id="minutesAmount"
          />
          <span>minutos</span>
        </FormContainer>

        <CounterdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CounterdownContainer>
        <StartCountdownButton form="pomodoroForm" type="submit">
          <Play />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
