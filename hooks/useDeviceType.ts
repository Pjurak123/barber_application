import { useState, useEffect } from 'react';

export enum DeviceType {
  Mobile = 'mobile',
  Tablet = 'tablet',
  Desktop = 'desktop',
}

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);

  useEffect(() => {
    const setInitialDeviceType = () => {
      if (window.matchMedia('(max-width: 767px)').matches) {
        setDeviceType(DeviceType.Mobile);
      } else if (window.matchMedia('(max-width: 1024px)').matches) {
        setDeviceType(DeviceType.Tablet);
      } else {
        setDeviceType(DeviceType.Desktop);
      }
    };

    setInitialDeviceType();

    const mediaQueryList = window.matchMedia('(max-width: 1024px)');
    const handleResize = () => {
      if (mediaQueryList.matches) {
        setDeviceType(DeviceType.Tablet);
      } else {
        setDeviceType(DeviceType.Desktop);
      }
    };

    mediaQueryList.addListener(handleResize);

    return () => {
      mediaQueryList.removeListener(handleResize);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
