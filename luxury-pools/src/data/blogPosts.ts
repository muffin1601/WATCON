export interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "An Oasis in the Heart of the City: The Magic of Trident Gurgaon",
    excerpt: "Discover how the Trident Gurgaon uses expansive water bodies and Rajasthani architecture to create a sanctuary of peace in a corporate hub.",
    content: `
      <p>If you are looking for a sanctuary away from the hustle and bustle of Gurgaon’s corporate towers, the Trident Gurgaon is the ultimate retreat. The moment you step into the courtyard, you are greeted by an expansive water body that seems to mirror the sky.</p>
      <p>The architecture is a stunning blend of Rajasthani tradition and modern minimalism. As the sun sets, the fire torches around the swimming pool light up, casting a golden glow over the tranquil blue water. It’s not just a hotel; it’s a visual masterpiece that offers peace and luxury in every corner.</p>
    `,
    date: "March 17, 2026",
    category: "Architecture",
    image: "/blog/blog1.png",
    slug: "magic-of-trident-gurgaon",
    author: "Hospitality Curator"
  },
  {
    title: "Skyline Splendor: Redefining the Urban Pool Experience",
    excerpt: "Explore the stunning rooftop infinity pool at Crowne Plaza Rohini, where tropical sanctuary meets city silhouette.",
    content: `
      <p>Rising above the busy streets of North Delhi, the rooftop pool at Crowne Plaza Rohini is a masterclass in urban escapism. The infinity-edge feel, combined with rows of majestic palm trees, transports guests from a bustling metropolis to a tropical sanctuary in seconds.</p>
      <p>It’s the perfect spot for those who seek a quiet morning swim or a sunset cocktail while watching the city silhouette fade into the horizon. This rooftop marvel proves that even in the densest urban environments, a well-engineered water body can provide absolute serenity.</p>
    `,
    date: "March 15, 2026",
    category: "Urban Design",
    image: "/blog/blog2.png",
    slug: "urban-pool-experience-crowne-plaza",
    author: "Design Lead"
  },
  {
    title: "Healing in the Clouds: The Spiritual Water Therapy of Six Senses Himalayas",
    excerpt: "Dive into the meditative world of Watsu therapy and Himalayan aquatic healing at the world-renowned Six Senses.",
    content: `
      <p>High in the serene peaks of the Himalayas, wellness takes on a deeper meaning. This isn't just a swimming pool; it is a sacred space for rejuvenation. The experience captures the essence of Watsu therapy and aquatic healing, where the warmth of the water meets the meditative vibrations of Tibetan singing bowls.</p>
      <p>In this sanctuary, every dip is designed to align your mind, body, and spirit against the backdrop of the world’s most majestic mountains. It represents the pinnacle of spiritual water therapy integrated into architectural excellence.</p>
    `,
    date: "March 12, 2026",
    category: "Wellness",
    image: "/blog/blog3.jpeg",
    slug: "spiritual-water-therapy-himalayas",
    author: "Wellness Expert"
  }
];

