export const LeftBar = () => {
  const sidebarItems = [
    "Home",
    "Subscriptions",
    "You",
    "History",
    "Playlists",
    "Your videos",
    "Your podcasts",
    "Watch Later",
    "Liked videos",
    "Downloads",
  ];

  return (
    <div className="bg-gray-950 w-48 hidden md:block min-h-screen text-white">
      {sidebarItems.slice(0, 3).map((title, idx) => (
        <BarWithIcon key={idx} title={title} />
      ))}
      <Line />
      {sidebarItems.slice(3, 8).map((title, idx) => (
        <BarWithIcon key={idx} title={title} />
      ))}
      <Line />
      {sidebarItems.slice(8).map((title, idx) => (
        <BarWithIcon key={idx} title={title} />
      ))}
      <Line />
    </div>
  );
};

export const Line = () => {
  return (
    <div className="w-full bg-gray-200 h-px dark:bg-gray-700 pl-3 pr-3 opacity-20">
      <div className="bg-red-600 h-0.5 dark:bg-gray-500" style={{ width: "100%" }}></div>
    </div>
  );
};

function BarWithIcon({ title }: { title: string }) {
  return (
    <div className="overflow-x-visible">
      <BarElement
        title={title}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
      />
    </div>
  );
}

function BarElement({ icon, title }: { icon: any; title: string }) {
  return (
    <div className="w-full rounded-xl bg-black hover:bg-neutral-800 flex w-48 p-2 m-2 cursor-pointer items-center">
      <div className="pr-2">{icon}</div>
      <div>{title}</div>
    </div>
  );
}
