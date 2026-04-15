export const blogPosts = [
  {
    slug: "your-customers-arent-just-googling-anymore",
    title: "Your Customers Aren't Just Googling Anymore. They're Asking AI.",
    description:
      "Local customers are asking fuller questions and deciding faster. Here's why vague websites lose first.",
    published: "2026-04-16",
    displayDate: "April 16, 2026",
    readingTime: "4 min read",
    category: "AI Search Shift",
    coverImage: "/blog-covers/your-customers-arent-just-googling-anymore.png",
    coverAlt:
      "GeoLocally blog cover for Your Customers Aren't Just Googling Anymore. They're Asking AI.",
  },
  {
    slug: "what-aeo-means-for-local-businesses",
    title: "What AEO Means for Local Businesses, in Plain English",
    description:
      "AEO sounds technical. The real job is simpler: make your business easier to understand in search.",
    published: "2026-04-16",
    displayDate: "April 16, 2026",
    readingTime: "4 min read",
    category: "Plain English",
    coverImage: "/blog-covers/what-aeo-means-for-local-businesses.png",
    coverAlt:
      "GeoLocally blog cover for What AEO Means for Local Businesses, in Plain English.",
  },
  {
    slug: "why-a-video-first-storefront-beats-a-generic-website",
    title:
      "Why a Video-First Storefront Beats a Generic Small-Business Website",
    description:
      "Most small-business websites say too much and land too little. A focused storefront makes the next step clearer.",
    published: "2026-04-16",
    displayDate: "April 16, 2026",
    readingTime: "4 min read",
    category: "Storefront Strategy",
    coverImage:
      "/blog-covers/why-a-video-first-storefront-beats-a-generic-website.png",
    coverAlt:
      "GeoLocally blog cover for Why a Video-First Storefront Beats a Generic Small-Business Website.",
  },
  {
    slug: "how-to-make-your-business-easier-to-understand-online",
    title: "How to Make Your Business Easier to Understand Online",
    description:
      "If people struggle to tell what you do, where you work, or why they should trust you, start here.",
    published: "2026-04-16",
    displayDate: "April 16, 2026",
    readingTime: "5 min read",
    category: "Practical Fixes",
    coverImage:
      "/blog-covers/how-to-make-your-business-easier-to-understand-online.png",
    coverAlt:
      "GeoLocally blog cover for How to Make Your Business Easier to Understand Online.",
  },
];

export const blogPostBySlug = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
);
