import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { loadStripe } from "@stripe/stripe-js"
import { createClient } from '@supabase/supabase-js'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL!;
const supabaseAnonKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY!;


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
