import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Col, Page } from "../components/containers";
import Navbar from "../components/layouts/Navbar";

export default function LogInPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  async function handleLogIn() {
    try {
      const res = await axios.post("/api/login", form);
      console.log(res);
      if (res.status === 200) {
        router.push("/");
      }
    } catch (error) {
      setError(true);
    }
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
            style={{ width: 200 }}
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
            style={{ width: 200 }}
          />
          {error && (<p style={{color: 'red', maxWidth: 200, fontSize: '.8rem'}}>Unable to login, make sure email and password is correct</p>)}
        </Col>

        <button onClick={handleLogIn} style={{ width: 200 }}>
          Log in
        </button>
      </Col>
    </Page>
  );
}
