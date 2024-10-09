import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = 'https://mzrxmaebpxrnlquwigah.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16cnhtYWVicHhybmxxdXdpZ2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0MzE0MzksImV4cCI6MjA0NDAwNzQzOX0.bTmwojwqgQAudFgdW-ANKFS_CY4QV8LRl3OfeDJsosA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});