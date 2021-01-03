import React, { useContext } from 'react'
import { useMediaQuery } from 'react-responsive';

export type Devices = 'desktop' | 'bigScreen' | 'mobile';
export const DeviceContext = React.createContext<Devices>('desktop');


function deviceSwitch (
  devices:{desktop:boolean, bigScreen:boolean, mobile:boolean}
): Devices{
  const {desktop, bigScreen, mobile} = devices;

  if(desktop) return 'desktop'
  if(bigScreen) return 'bigScreen'
  return 'mobile'
}

export function getDevice(){

  const media = {
    desktop: useMediaQuery({query: '(min-device-width: 1224px)'}),
    bigScreen: useMediaQuery({ query: '(min-device-width: 1824px)' }),
    mobile: useMediaQuery({ query: '(max-width: 1224px)' }) 
  }

  const device = deviceSwitch(media);

  return device;
}

export function useDeviceContext() {
  return useContext(DeviceContext);
}