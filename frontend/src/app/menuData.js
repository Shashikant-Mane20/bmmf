// menuData.js

const menuData = [
  { name: "Home", href: "/" },
  {
    name: "Causes",
    href: "/causes",
    submenu: [
      { name: "Causes List", href: "/causes" },
      // { name: "Cause 2", href: "/causes/2" },
      // { name: "Cause 3", href: "/causes/3" }
    ]
  },
  {
    name: "Events",
    href: "/events",
    submenu: [
      { name: "Event List", href: "/events/list" },
      { name: "Event 2", href: "/events/2" }
    ]
  },
  {
    name: "Pages", href: "/",
    submenu: [
      { name: "About Our Work", href: "/about-our-work" },
      { name: "Meet our Team", href: "/team-members" },
      { name: "Gallery", href: "/gallery" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "FAQ", href: "/faq" },
      { name: "404 Page", href: "/404" },
    ]
  },
  { name: "Blog", href: "/blog" },
  // { name: "Donate", href: "/donate" }
];

export default menuData;
