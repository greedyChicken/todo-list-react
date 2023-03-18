import { StyledNavLink } from "../../styled";
import { ListItem, StyledList, StyledNav } from "./styled";

const Navbar = () => {
  return (
    <StyledNav>
      <StyledList>
        <ListItem>
          <StyledNavLink to="/tasks">Tasks</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/author">About author</StyledNavLink>
        </ListItem>
      </StyledList>
    </StyledNav>
  );
};

export default Navbar;
