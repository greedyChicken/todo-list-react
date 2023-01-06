import { StyledNavLink } from "../../styled";
import { ListItem, StyledList, StyledNav } from "./styled";

const Navbar = () => {
  return (
    <StyledNav>
      <StyledList>
        <ListItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </ListItem>
      </StyledList>
    </StyledNav>
  );
};

export default Navbar;
