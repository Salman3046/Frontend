const sidebarData = [
  {
    icon: "/assets/images/icons/user.png",
    name: "Profile",
    path: "profile",
    enabled: true,
  },
  {
    icon: "/assets/images/icons/edit.png",
    name: "Projects",
    path: "projects",
    enabled: true,
  },
  {
    icon: "/assets/images/icons/diagram.png",
    name: "Finance",
    path: "finance",
    enabled: true,
  },
  {
    icon: "/assets/images/icons/alert.png",
    name: "Support",
    path: "support",
    enabled: true,
  },
];

export default sidebarData.filter((side) => side.enabled);
