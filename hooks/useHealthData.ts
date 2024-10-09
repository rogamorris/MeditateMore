import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import AppleHealthKit, {
    HealthInputOptions,
    HealthKitPermissions,
    HealthUnit,
  } from "react-native-health";

const { Permissions } = AppleHealthKit.Constants;

const permissions: HealthKitPermissions = {
    permissions: {
      read: [
        Permissions.Steps,
        Permissions.FlightsClimbed,
        Permissions.DistanceWalkingRunning,
        Permissions.MindfulSession
      ],
      write: [],
    },
  };

const useHealthData = () => {
  const [steps, setSteps] = useState(0);
  const [flights, setFlights] = useState(0);
  const [distance, setDistance] = useState(0);

  const [hasPermissions, setHasPermission] = useState(false);

  useEffect(() => {
    if (Platform.OS !== 'ios') {
        return;
      }

    AppleHealthKit.initHealthKit(permissions, (err) => {
      if (err) {
        console.log('Error getting permissions');
        return;
      }
      setHasPermission(true);
    });
  }, []);

  useEffect(() => {
    if (!hasPermissions) {
      return;
    }
  
    // Query Health data
    const options: HealthInputOptions = {
		date: new Date().toISOString(),
	};
	
	AppleHealthKit.getStepCount(options, (err, results) => {
	  if (err) {
	    console.log('Error getting the steps');
	    return;
	  }
	  setSteps(results.value);
	});
  }, [hasPermissions]);

  return { steps, flights, distance };
};

export default useHealthData;