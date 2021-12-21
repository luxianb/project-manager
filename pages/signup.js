import axios from "axios";
import React, { useState } from "react";

export default function SignUpPage() {
  const [form, setForm] = useState({email: '', password: ''})

  async function handleSignUp() {
    const res = await axios.post('/api/signup', form);
    console.log(res);
  }

  return(
    <div>
      <input
        placeholder="email"
        value={form.email}
        onChange={e => setForm({...form, email: e.target.value})}
      />
      <input
        placeholder="password"
        type='password'
        value={form.password}
        onChange={e => setForm({...form, password: e.target.value})}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}