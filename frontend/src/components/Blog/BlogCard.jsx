// components/BlogCard.js
import Link from 'next/link';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-md" />
      <Link href={`/blog/${blog.id}`}>
        <h2 className="text-xl font-semibold text-darkgreen hover:text-lightgreen mt-4">{blog.title}</h2>
      </Link>
      <p className="text-sm text-gray-600">{blog.date} by {blog.author}</p>
      <p className="mt-2 text-gray-800">{blog.content.slice(0, 150)}...</p> {/* Displaying first 150 chars as excerpt */}
    </div>
  );
};

export default BlogCard;
