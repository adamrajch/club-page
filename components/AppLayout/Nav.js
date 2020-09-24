import Link from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import SideMenu from "../SideMenu/Menu";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Nav = (props) => {
  const user = true;
  const authlinks = [{ title: "Roster", href: "/roster", auth: false }];
  const navlinks = [
    { title: "About", href: "/about", auth: false },
    { title: "FAQs", href: "/faqs", auth: false },
  ];
  return (
    <>
      <nav className="oof">
        <span className="logo">
          <Link href="/">
            <a>TendoN</a>
          </Link>
        </span>

        <ul className="navlinks">
          {user &&
            authlinks.map((link) => {
              return (
                <li className={link.title} key={link.title}>
                  <Link href={link.href}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              );
            })}
          {navlinks.map((link) => {
            return (
              <li className={link.title} key={link.title}>
                <Link href={link.href}>
                  <a>{link.title}</a>
                </Link>
              </li>
            );
          })}

          {user ? (
            <>
              <li>
                <Link href="/account">
                  <a>Account</a>
                </Link>
              </li>
              <li>
                <Link href="/logout">
                  <a>Logout</a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/singup">
                  <a>Sign Up</a>
                </Link>
              </li>
            </>
          )}
        </ul>

        <span className="hidden">
          <SideMenu />
        </span>
      </nav>
      <style jsx>{`
        .oof {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 9vh;
          min-width: 100%;
        }

        .navlinks {
          justify-self: end;
          width: 33%;
          display: flex;
          list-style-type: none;
          justify-content: flex-end;
          align-items: center;
        }
        li {
          padding: 0 2em;
        }
        li:hover a:hover {
          color: white;
          text-shadow: white 0px 0px 10px;
        }
        a {
          text-decoration: none;
          color: #eee;
        }
        .logo {
          justify-self: center;
          margin-left: 20px;
          cursor: pointer;
        }
        .hidden {
          display: none;
          margin-right: 20px;
        }
        @media screen and (max-width: 860px) {
          .navlinks {
            display: none;
          }
          .hidden {
            display: inline;
          }
        }
      `}</style>
    </>
  );
};
export default Nav;
