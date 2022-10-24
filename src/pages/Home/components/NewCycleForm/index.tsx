import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { FormContainer, TaskInput, MinutesAmountInput } from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "O ciclo precisa ser de no mínimo 5 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function NewCycleContainer() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

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
