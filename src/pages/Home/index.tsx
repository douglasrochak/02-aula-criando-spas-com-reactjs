import { Play } from "phosphor-react";
import {
  CounterdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from "./style";

export function Home() {
  return (
    <HomeContainer>
      <form id="pomodoroForm" action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos</span>
        </FormContainer>

        <CounterdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CounterdownContainer>
        <button form="pomodoroForm" type="submit">
          <Play />
          Começar
        </button>
      </form>
    </HomeContainer>
  );
}
