import { ReactNode } from "react";
import { useMatch, useResolvedPath, Link } from "react-router-dom";
import styled from "styled-components";

interface NavLinkProps {
	to: string;
	children: ReactNode;
}

export default function NavLink({ to, children }: NavLinkProps) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<NavItem className={isActive ? "active" : ""}>
			<Link to={to}>{children}</Link>
		</NavItem>
	);
}

const NavItem = styled.li`
	padding: 0.25rem 0.5rem;
	& > a {
		color: blue;
		text-decoration: none;
	}
`;
