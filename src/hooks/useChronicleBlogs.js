import { useState, useEffect } from "react";

const CHRONICLE_API_URL = "https://chronicle-aiso.onrender.com/api/posts";

const processImageUrl = (url) => {
  if (!url || typeof url !== "string" || url.trim() === "") {
    return "/images/memories/langgawd.jpg";
  }
  if (url.startsWith("/")) {
    return `https://chronicle-aiso.onrender.com${url}`;
  }
  return url;
};

const formatDate = (isoString) => {
  if (!isoString) return "Recent Post";
  try {
    const d = new Date(isoString);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch (e) {
    return "Recent Post";
  }
};

export const useChronicleBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(CHRONICLE_API_URL, {
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.statusText}`);
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        const formatted = data.map((post, idx) => ({
          id: post.id,
          title: post.title,
          period: formatDate(post.created_at),
          location: "Chronicle Blog",
          badge: post.tags && post.tags.length > 0 ? post.tags[0] : "Engineering",
          image: processImageUrl(post.cover_image_url),
          imageCaption: post.title,
          narrative: post.summary || (post.content ? post.content.slice(0, 180).replace(/[#*`]/g, '') + "..." : "Read full article on Chronicle."),
          highlights: post.tags && post.tags.length > 0
            ? post.tags.map((t) => `#${t}`)
            : ["Developer Blog", "Chronicle", "Full-Stack"],
          href: `https://chronicle-aiso.onrender.com/posts/${post.id}`,
          raw: post,
        }));
        setBlogs(formatted);
      } else {
        setBlogs([]);
      }
    } catch (err) {
      console.warn("Chronicle live blogs fetch error, using fallback state:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return { blogs, loading, error, refetch: fetchBlogs };
};

export default useChronicleBlogs;
