import React, { createContext, ReactNode, useReducer, useState } from "react";
import { Cycle, cyclesReducer } from "../reducers/cycle";

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CycleContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
}

export const CycleContext = createContext({} as CycleContextType);

interface CycleContextProviderProps {
  children: ReactNode;
}

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  });

  const { cycles, activeCycleId } = cyclesState;

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle: Cycle) => cycle.id === activeCycleId);

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch({
      type: "ADD_NEW_CYCLE",
      payload: { newCycle, id },
    });
    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch({
      type: "INTERRUPT_CURRENT_CYCLE",
      payload: { activeCycleId },
    });

    // setActiveCycleId(null);
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: "MARK_CURRENT_CYCLE_AS_FINISHED",
      payload: { activeCycleId },
    });
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  );
}
