import { ReactNode } from "react";
import { useMatch, useResolvedPath, Link } from "react-router-dom";

interface NavLinkProps {
	to: string;
	children: ReactNode;
}

export default function NavLink({ to, children }: NavLinkProps) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to}>{children}</Link>
		</li>
	);
}

