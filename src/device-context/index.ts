import React, { useContext } from 'react'

export type Devices = 'desktop' | 'bigScreen' | 'mobile';
export const DeviceContext = React.createContext<Devices>('desktop');

export function useDeviceContext() {
  return useContext(DeviceContext);
}