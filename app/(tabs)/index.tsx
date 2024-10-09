import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { testSupabaseConnection } from '@/lib/supabase';

export default function HomeScreen() {
  const [testResult, setTestResult] = useState<string>('Testing...');

  useEffect(() => {
    testSupabaseConnection().then(result => {
      setTestResult(result.success ? 'Connected!' : 'Failed');
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'white' }}>Hello, Roger!</Text>
      <Text style={{ color: 'white', marginTop: 20 }}>Supabase: {testResult}</Text>
    </View>
  );
}