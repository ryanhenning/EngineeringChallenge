import React from 'react';
import { useStorageState } from '../app/useStorageState';

interface MachineDataContext {
  machineData: any;
  updateMachineData: (newMachineData: any) => Promise<void>;
  resetMachineData: () => void;
  setScores: (newScores: number) => Promise<void>;
}

const MachineDataContext = React.createContext<MachineDataContext>({
  machineData: null,
  updateMachineData: async () => null,
  resetMachineData: () => null,
  setScores: () => null,
});

export function useMachineData() {
  const value = React.useContext(MachineDataContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error(
        'useMachineData must be wrapped in a <MachineDataProvider />'
      );
    }
  }

  return value;
}

export function MachineDataProvider(props: React.PropsWithChildren) {
  const [[isLoading, machineData], setMachineData] =
    useStorageState<any>('machineData');

  const updateMachineData = async (newMachineData: any) => {
    try {
      // Update the state with the new machine data
      setMachineData(newMachineData);
    } catch (error) {
      console.error(error);
      // Handle storage saving error
    }
  };

  const setScores = async (newScores) => {
    try {
      if (!machineData) {
        return;
      }

      const newMachineData = JSON.parse(JSON.stringify(machineData)); // Deep copy machine parts

      newMachineData.scores = newScores;

      // Update the state with the new machine data
      setMachineData(newMachineData);

      // Persist the updated machine data to local storage
      setMachineData(newMachineData);
    } catch (error) {
      console.error(error);
      // Handle storage saving error
    }
  };

  const resetMachineData = () => {
    try {
      setMachineData(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MachineDataContext.Provider
      value={{
        machineData,
        updateMachineData,
        resetMachineData,
        setScores,
      }}
    >
      {props.children}
    </MachineDataContext.Provider>
  );
}
