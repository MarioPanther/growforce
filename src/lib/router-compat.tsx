"use client";

import NextLink from "next/link";
import { useParams as useNextParams, usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { cn } from "@/lib/utils";

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to?: string;
  href?: string;
  replace?: boolean;
};

export type NavLinkProps = LinkProps;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, href, children, ...props }, ref) => (
    <NextLink ref={ref} href={href ?? to ?? "/"} {...props}>
      {children}
    </NextLink>
  ),
);

Link.displayName = "RouterCompatLink";

export const NavLink = React.forwardRef<HTMLAnchorElement, Omit<NavLinkProps, "className"> & {
  className?: string | ((state: { isActive: boolean; isPending: boolean }) => string);
}>(({ to, href, className, ...props }, ref) => {
  const pathname = usePathname();
  const target = href ?? to ?? "/";
  const isActive = pathname === target;
  const resolvedClassName =
    typeof className === "function" ? className({ isActive, isPending: false }) : className;

  return <Link ref={ref} to={target} className={resolvedClassName} {...props} />;
});

NavLink.displayName = "RouterCompatNavLink";

export const useNavigate = () => {
  const router = useRouter();

  return React.useCallback(
    (to: string | number) => {
      if (typeof to === "number") {
        window.history.go(to);
        return;
      }

      router.push(to);
    },
    [router],
  );
};

export const useParams = <T extends Record<string, string | string[] | undefined> = Record<string, string>>() =>
  useNextParams() as T;

export const useLocation = () => {
  const pathname = usePathname();

  return React.useMemo(
    () => ({
      pathname,
      search: typeof window === "undefined" ? "" : window.location.search,
      hash: typeof window === "undefined" ? "" : window.location.hash,
      state: null,
      key: "",
    }),
    [pathname],
  );
};

export const BrowserRouter = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const Routes = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const Route = (_props: Record<string, unknown>) => null;

export const navLinkClassName = (
  className?: string,
  activeClassName?: string,
  pendingClassName?: string,
) =>
  ({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
    cn(className, isActive && activeClassName, isPending && pendingClassName);
