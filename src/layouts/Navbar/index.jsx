import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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
  gap: 3px;
`;
const Brand = styled.h1`
  cursor: pointer;
  margin: 0;
`;

export default function Navbar() {
  return(
    <header style={styles.header}>
      <Link href='/'>
        <h1 style={styles.brand}>HPM</h1>
      </Link>

      <nav style={styles.nav}>
      <Link href='/signIn'>
        <a>sign in</a>
      </Link>
      <Link href='/signUp'>
        <a>sign up</a>
      </Link>
      <Link href='/signOut'>
        <a>sign out</a>
      </Link>
      </nav>
    </header>
  )
};

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: '12px 24px',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 0 6px rgba(0,0,0,.2)',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    gap: '3px',
  }, 
  brand: {
    cursor: 'pointer',
    margin: '0px',
  }
}
