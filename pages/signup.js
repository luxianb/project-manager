import axios from "axios";
import React, { useState } from "react";
import { Col, Page } from "../components/containers";
import Navbar from "../components/Navbar";

export default function SignUpPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  async function handleSignUp() {
    const res = await axios.post("/api/signup", form);
    console.log(res);
  }

  return (
    <Page>
      <Navbar />
      <Col style={{ gap: 12, alignItems: "center", padding: "32px 18px" }}>
        <Col>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            placeholder="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            autoComplete="new-email"
            style={{minWidth: 200}}
            />
        </Col>
        <Col>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            placeholder="password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            autoComplete="new-password"
            style={{minWidth: 200}}
            />
        </Col>
        <button onClick={handleSignUp} style={{minWidth: 200}}>Sign Up</button>
      </Col>
    </Page>
  );
}
