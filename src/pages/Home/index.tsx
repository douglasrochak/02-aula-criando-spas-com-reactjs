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
            list="task-suggestions"
          />
          <datalist id="task-suggestions">
            <option value="Sugestão 1"></option>
            <option value="Sugestão 2"></option>
            <option value="Sugestão 3"></option>
            <option value="Maça"></option>
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            placeholder="00"
            type="number"
            id="minutesAmount"
            step="5"
            min={5}
            max={60}
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
        <StartCountdownButton disabled form="pomodoroForm" type="submit">
          <Play />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
