import Link from "next/link";

const articles = [
  {
    title: 'The Importance of Preserving Malagasy Folktales',
    excerpt: 'Discover why it’s crucial to keep the tradition of Malagasy folktales alive and how Ti-Books contributes to this cause.',
    link: '/blog/preserving-malagasy-folktales',
  },
  {
    title: 'How Interactive Storybooks Aid in Language Learning',
    excerpt: 'Learn how interactive storybooks can enhance English language learning for young Malagasy students.',
    link: '/blog/interactive-storybooks-language-learning',
  },
  {
    title: 'Exploring the Richness of Malagasy Culture',
    excerpt: 'Dive into the vibrant culture of Madagascar through its stories, customs, and traditions.',
    link: '/blog/exploring-malagasy-culture',
  },
];

const BlogPage = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-16">
      <div className="container mx-auto px-4">

        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800">Latest Insights & Articles</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Explore our blog to learn more about Malagasy culture, language learning, and the stories behind Ti-Books.
          </p>
        </div>

        {/* Article Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <Link href={article.link} className="text-green-500 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link href="/blog" className="text-white bg-green-500 hover:bg-green-600 font-semibold py-3 px-6 rounded-lg">
            Explore More Articles
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogPage;
