// pages/blog/[id].js
import { useRouter } from 'next/router';
import blogs from '../../../data/Blog'
import Sidebar from '@/components/Blog/SideBar';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic id from the URL

  // Find the specific blog by id
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div>Blog post not found</div>; // Handle case where the blog ID doesn't exist
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Blog Content */}
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-md" />
            <h1 className="text-3xl font-semibold text-darkgreen mt-4">{blog.title}</h1>
            <p className="text-sm text-gray-600">{blog.date} by {blog.author}</p>
            <div className="mt-6 text-gray-800">
              <p>{blog.content}</p>
            </div>
          </div>
        </div>

        {/* Sidebar (Recent blogs and Categories) */}
        <Sidebar blogs={blogs} />
      </div>
    </div>
  );
};

export default BlogPost;
