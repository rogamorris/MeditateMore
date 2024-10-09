import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Database } from '../types/supabase';

const supabaseUrl = 'https://mzrxmaebpxrnlquwigah.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16cnhtYWVicHhybmxxdXdpZ2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0MzE0MzksImV4cCI6MjA0NDAwNzQzOX0.bTmwojwqgQAudFgdW-ANKFS_CY4QV8LRl3OfeDJsosA';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  });
  
  export async function testSupabaseConnection(): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('test')
        .select('*')
        .limit(1);
  
      if (error) throw error;
  
      return { success: true, data };
    } catch (error) {
      console.error('Error testing Supabase connection:', error);
      return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
  }