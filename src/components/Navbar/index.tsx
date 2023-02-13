import styled from "styled-components";
import { useMatch, useResolvedPath } from "react-router-dom";

import NavLink from "./NavLink";

export default function Navbar() {
	const resolvedPath = useResolvedPath("/");
	const isHome = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<NavContainer className={isHome ? "nav__home" : ""}>
			<Nav>
				<NavLink to="/">Simple Tools</NavLink>
				<NavLink to="/todo-list">TodoList</NavLink>
			</Nav>
		</NavContainer>
	);
}

const NavContainer = styled.nav`
	height: 5rem;
`;

const Nav = styled.ul`
	margin: 0;
	display: flex;
	& > :first-child {
		margin-right: auto;
	}
	& > li {
		flex: 1 1;
		max-width: 10rem;
		display: flex;
		align-items: center;
		justify-content: center;
		&.active {
			background-color: blue;
			& > a {
				color: white;
			}
		}
	}
`;
