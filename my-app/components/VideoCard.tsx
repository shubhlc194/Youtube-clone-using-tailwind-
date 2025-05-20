export function VideoCard(props: {
  title: string;
  image: string;
  thumbImage: string;
  author: string;
  views: string;
  timestamp: string;
}) {
  return (
    <div className="p-4 rounded-xl bg-zinc-900 text-white max-w-md shadow-lg">
      {/* Thumbnail with 16:9 aspect ratio */}
      <div className="w-full aspect-video mb-2">
        <img
          alt="Thumbnail"
          src={props.image}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Video info */}
      <div className="flex items-start gap-3">
        {/* Channel logo */}
        <img
          src={props.thumbImage}
          alt="Channel Logo"
          className="w-10 h-10 rounded-full object-cover mt-1"
        />

        {/* Text content */}
        <div className="flex-1">
          <p className="text-base font-semibold leading-snug">{props.title}</p>
          <p className="text-sm text-gray-300 mt-0.5">{props.author}</p>
          <p className="text-xs text-gray-500 mt-1">
            {props.views} · {props.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

