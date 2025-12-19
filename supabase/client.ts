import {createClient} from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY as string

export const supabase = createClient(url, key);

// crud
// insert into db
// const { error, data } = await supabase.from("table name").insert({"what": "ever data"}).single()

// get from db
// const { error, data } = await supabase.from("table name").select("*")

// delete an item
// const { error, data } = await supabase.from("table name").delete().eq("id", id)

// update an item
// const { error, data } = await supabase.from("table name").update({columnName: newColumnValue}).eq("id", id)

//auth
// signup
// it has other options depending on auth style
// const {error} = await supabase.auth.signUp({email, password, anyOther, info})

// signin
// it has other options depending on auth style
// const {error} = await supabase.auth.signInWithPassword({email, password, anyOther, info})

// track session
//const session = await supabase.auth.getSession()