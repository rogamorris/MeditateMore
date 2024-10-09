import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { testSupabaseConnection } from '@/lib/supabase';
import useHealthData from '../../hooks/useHealthData';
import Value from '../../components/Value';


export default function HomeScreen() {
  const [testResult, setTestResult] = useState<string>('Testing...');
  const {steps, distance, flights} = useHealthData();

  console.log(`Steps: ${steps} | Distance: ${distance}m | Flights: ${flights}`);

  useEffect(() => {
    testSupabaseConnection().then(result => {
      setTestResult(result.success ? 'Connected!' : 'Failed');
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'gray' }}>Hello, Roger!</Text>
      <Text style={{ color: 'gray', marginTop: 20 }}>Supabase: {testResult}</Text>
    
      <Value label="Steps" value={steps.toString()} />
      <Value label="Distance" value={`${(distance / 1000).toFixed(2)} km`} />
      <Value label="Flights Climbed" value={flights.toString()} />
    </View>
  );
}