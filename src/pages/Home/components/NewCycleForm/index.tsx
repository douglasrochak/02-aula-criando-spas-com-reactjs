import { useContext } from "react";
import { useFormContext } from "react-hook-form";

import { CycleContext } from "../..";
import { FormContainer, TaskInput, MinutesAmountInput } from "./styles";

export function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        placeholder="Dé um nome para seu projeto"
        id="task"
        list="task-suggestions"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos</span>
    </FormContainer>
  );
}
