import axios from "axios";
import React, { useState } from "react";

export default function LogInPage() {
  const [form, setForm] = useState({email: '', password: ''})

  async function handleLogIn() {
    const res = await axios.post('/api/login', form);
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
      <button onClick={handleLogIn}>Log in</button>
    </div>
  )
}