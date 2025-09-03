import { Link } from "wouter";
import { useEffect } from "react";

export default function YoutubeThumbnails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Array of thumbnails with metadata
  const thumbnails = [
    {
      src: "https://res.cloudinary.com/durgkvgwa/image/upload/v1756913964/DBC_poster_tn_cbzpyp.webp",
      title: "I asked my viewers to make FAKE movies posters and they 𝘾𝙊𝙊𝙆𝙀𝘿 🔥",
      channelName: "Redshell",
      channelPic: "https://res.cloudinary.com/durgkvgwa/image/upload/v1756917604/redshell_pfp_jgbcpj.webp",
      link: "https://youtu.be/0sFFWP2vdNw?si=vIzVSmOSSVwptNtf",
    },
    {
      src: "https://res.cloudinary.com/durgkvgwa/image/upload/v1756914548/sunraybee_thumbnail_remake_bg6c1l.webp",
      title: "Sunraybee Thumbnail Remake",
      channelName: "SunRayBee Live",
      channelPic: "https://res.cloudinary.com/durgkvgwa/image/upload/v1756917944/sunraybee_pfp_h0uloe.webp",
      link: "",
    },
    {
      src: "https://res.cloudinary.com/durgkvgwa/image/upload/v1756914337/Umamusume_tn_xl0xqc.webp",
      title: "I asked my viewers to make FAKE movies posters and they 𝘾𝙊𝙊𝙆𝙀𝘿 🔥",
      channelName: "Redshell",
      channelPic: "https://res.cloudinary.com/durgkvgwa/image/upload/v1756917604/redshell_pfp_jgbcpj.webp",
      link: "https://youtu.be/0sFFWP2vdNw?si=vIzVSmOSSVwptNtf",
    },
    {
      src: "https://res.cloudinary.com/durgkvgwa/image/upload/v1756914514/MrPfx_professional_thumbnail_1_mn2uop.webp",
      title: "How To Trade Forex In 7 Minutes For Beginners",
      channelName: "Mr P Fx",
      channelPic: "https://res.cloudinary.com/durgkvgwa/image/upload/v1756920314/mrpfx_pfp_xrctcf.webp",
      link: "",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="text-accent hover:text-accent/80 mb-4 inline-flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Portfolio
          </Link>
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Youtube Thumbnails
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Eye-catching thumbnails designed for YouTube creators
          </p>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-card shadow-md hover:shadow-xl transition"
            >
              {/* Thumbnail */}
              <a href={thumb.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={thumb.src}
                  alt={thumb.title}
                  className="w-full aspect-video object-cover"
                />
              </a>

              {/* Info Section */}
              <div className="flex items-start gap-3 p-4">
                {/* Channel Profile */}
                <img
                  src={thumb.channelPic}
                  alt={thumb.channelName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {/* Title + Channel */}
                <div>
                  <h3 className="font-semibold text-lg whitespace-nowrap overflow-hidden text-ellipsis max-w-[250px]">
                    {thumb.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    @{thumb.channelName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
