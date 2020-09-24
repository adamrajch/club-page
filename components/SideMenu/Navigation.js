import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants} className="ul">
    {navlinks.map((link) => (
      <MenuItem i={link.i} key={link.i} href={link.href} title={link.title} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
const navlinks = [
  { href: "/roster", title: "Roster", id: 0, i: 0 },
  { href: "/about", title: "About Us", id: 1, i: 2 },
  { href: "/faqs", title: "FAQs", id: 2, i: 3 },
  // {href:"/" , title:"", id:0, auth:false},
];
