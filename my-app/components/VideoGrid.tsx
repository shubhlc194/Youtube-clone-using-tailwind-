import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "how to Save deer",
    image: "/salman.png",
    thumbImage: "/viveka.png",
    author: "vivek oberoy",
    views: "100K",
    timestamp: "10 days ago",
  },
  {
    title: "1$ vs 10M$",
    image: "/beast.png",
    thumbImage: "/t.png",
    author: "T-Series",
    views: "180K",
    timestamp: "15 days ago",
  },
  {
    title: "how to do coding",
    image: "/t4.jpg",
    thumbImage: "/t4.jpg",
    author: "mark chaudhary",
    views: "102K",
    timestamp: "20 days ago",
  },
  {
    title: "Wake up",
    image: "/t3.jpg",
    thumbImage: "/t9.png",
    author: "narendar modi",
    views: "108M",
    timestamp: "15 days ago",
  },
  {
    title: "point to Learn",
    image: "/t6.jpg",
    thumbImage: "/t6.jpg",
    author: "striver chaudhary",
    views: "100K",
    timestamp: "10 days ago",
  },
  {
    title: "how to start coding in 1st year",
    image: "/t7.jpg",
    thumbImage: "/t7.jpg",
    author: "Apna college",
    views: "1.5M",
    timestamp: "11 months ago",
  },
  // ⬇ New Videos Below ⬇
  {
    title: "World's Most Dangerous Roads",
    image: "/road.jpg",
    thumbImage: "/road.jpg",
    author: "Adventure Hub",
    views: "860K",
    timestamp: "1 week ago",
  },
  {
    title: "How to Invest as a Student",
    image: "/invest.jpg",
    thumbImage: "/invest.jpg",
    author: "Finance with Me",
    views: "210K",
    timestamp: "3 weeks ago",
  },
  {
    title: "Inside a Billionaire's House",
    image: "/luxury.png",
    thumbImage: "/richguy.png",
    author: "Luxury Life",
    views: "2.1M",
    timestamp: "2 months ago",
  },
  {
    title: "24 Hours Eating Only Red Food!",
    image: "/redfood.jpg",
    thumbImage: "/funnyface.png",
    author: "Crazy Broz",
    views: "980K",
    timestamp: "6 days ago",
  },
  {
    title: "How to Build a Startup in 2025",
    image: "/startup.jpg",
    thumbImage: "/founder.png",
    author: "Tech Vision",
    views: "320K",
    timestamp: "1 month ago",
  },
  {
    title: "AI will replace you?",
    image: "/aiwars.jpg",
    thumbImage: "/botface.jpg",
    author: "CodeGeeks",
    views: "1.1M",
    timestamp: "2 weeks ago",
  },
  {
    title: "Coding at Google vs Amazon",
    image: "/techfight.jpg",
    thumbImage: "/tprofile2.jpg",
    author: "SDE Insider",
    views: "540K",
    timestamp: "4 months ago",
  },
  {
    title: "Day in the Life of IITian",
    image: "/iitlife.jpg",
    thumbImage: "/iitface.png",
    author: "Campus Diaries",
    views: "890K",
    timestamp: "3 weeks ago",
  },
  {
    title: "Fastest Man Alive - Reality?",
    image: "/fastman.jpg",
    thumbImage: "/runner.jpg",
    author: "SportX",
    views: "3.2M",
    timestamp: "8 days ago",
  },
  {
    title: "How Planets Were Formed",
    image: "/space.jpg",
    thumbImage: "/spacehead.jpg",
    author: "Galaxy Lab",
    views: "760K",
    timestamp: "1 month ago",
  }
];


export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {VIDEOS.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          image={video.image}
          thumbImage={video.thumbImage}
          author={video.author}
          views={video.views}
          timestamp={video.timestamp}
        />
      ))}
    </div>
  );
};
