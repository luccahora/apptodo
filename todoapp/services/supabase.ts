import "react-native-url-polyfill";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "URL";
const supabaseKey = "KEY";

export const supabase = createClient(supabaseUrl, supabaseKey);
