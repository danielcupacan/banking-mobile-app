import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill';

const SUPABASE_URL = 'https://zhwgxukvkrbxsljofynx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpod2d4dWt2a3JieHNsam9meW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNjk1MzcsImV4cCI6MjA3OTg0NTUzN30.e7eZmnUGmI1aGXC9aPstqU6Bk7Ny6yoF3fZmOPsH3iM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);