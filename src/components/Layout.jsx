import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
const StyledLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: orange;
  }
`;
const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
