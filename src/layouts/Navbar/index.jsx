import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import useUser from '../../../lib/useUser';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = useUser()
  const route = useRouter()

  useEffect(() => {
    if (user?.isLoggedIn) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [user])

  async function handleSignOut() {
    await axios('/api/signout');
    setLoggedIn(false);
    route.push('/')
  }

  return (
    <Header>
      <Link href='/'>
        <Brand>HPM</Brand>
      </Link>

      <Nav>
        {!loggedIn ? (
          <>
            <Link href='/login'>
              <a>Log in</a>
            </Link>
            <Link href='/signup'>
              <a>Sign up</a>
            </Link>
          </>
        ) : (
          <>
            <a onClick={handleSignOut}>Sign out</a>
          </>
        )}
      </Nav>
    </Header>
  )
};


const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 12px 24px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 6px rgba(0,0,0,.2);
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
const Brand = styled.h1`
  cursor: pointer;
  margin: 0;
`;
