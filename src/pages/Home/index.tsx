import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
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
  const { register, handleSubmit, watch } = useForm();

  function handleCreateNewCycle(data: any) {
    console.log(data);
  }

  const task = watch("task");
  const isSubmiDisabled = !task;

  return (
    <HomeContainer>
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        id="pomodoroForm"
        action=""
      >
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            placeholder="Dé um nome para seu projeto"
            id="task"
            list="task-suggestions"
            {...register("task")}
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
            {...register("minutesAmount")}
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
        <StartCountdownButton
          disabled={isSubmiDisabled}
          form="pomodoroForm"
          type="submit"
        >
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
