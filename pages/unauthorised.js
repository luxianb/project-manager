import Link from 'next/link'
import styled from 'styled-components'
import {Main, Page} from '../components/containers'
import Navbar from '../components/Navbar'

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

export default function UnauthorisedUserPage() {
  return(
    <Page>
      <Navbar />
      <Main style={{justifyContent: 'center', alignItems: 'center'}}>
        <p style={{textAlign: 'center'}}>
          <Link href='/login'><a className="decorated">Log In</a></Link>
           {' or '}
          <Link href='/signup' className="decorated"><a className="decorated">Sign Up</a></Link> to continue using the application</p>
      </Main>
    </Page>
  )
}