import { useState, useEffect } from 'react'
import { Calendar, User, Tag, ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import usePageMeta from '../hooks/usePageMeta'

export default function Blog() {
  usePageMeta({
    title: 'Insurance Blog | Inshora Group',
    description: 'Insurance tips and guides from Inshora Group.',
  })

  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:5001'

  useEffect(() => {
    fetchBlogs(currentPage)
  }, [currentPage])

  const fetchBlogs = async (page) => {
    try {
      setLoading(true)
      const response = await fetch(`${backendUrl}/api/blog?page=${page}&per_page=9`)
      const data = await response.json()
      
      if (data.success) {
        setBlogs(data.blogs)
        setTotalPages(data.pagination.pages)
      } else {
        setError(data.error || 'Failed to fetch blogs')
      }
    } catch (err) {
      setError('Error connecting to server')
      console.error('Error fetching blogs:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Layout>
      <PageHeader title="Inshora Blog" subtitle="Expert insurance tips, guides, and insights" />

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B1F8F] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <>
            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogs.map((blog) => (
                <Link
                  key={blog._id}
                  to={`/blog/${blog._id}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] flex items-center justify-center overflow-hidden">
                    {blog.image_url ? (
                      <img
                        src={blog.image_url.startsWith('http') ? blog.image_url : `${backendUrl}${blog.image_url}`}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-white text-center p-4">
                        <Tag className="w-10 h-10 mx-auto mb-2" />
                        <p className="text-sm">Inshora Insurance</p>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category */}
                    {blog.category && (
                      <span className="inline-block bg-[#0B1F8F]/10 text-[#0B1F8F] text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                        {blog.category}
                      </span>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0B1F8F] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    {blog.excerpt && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                        {blog.excerpt}
                      </p>
                    )}

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        {blog.author && (
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{blog.author}</span>
                          </div>
                        )}
                        {blog.created_at && (
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(blog.created_at)}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-[#0B1F8F] font-medium group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-200 hover:border-[#0B1F8F] hover:text-[#0B1F8F] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-lg transition ${
                      currentPage === i + 1
                        ? 'bg-[#0B1F8F] text-white'
                        : 'bg-white border border-gray-200 hover:border-[#0B1F8F] hover:text-[#0B1F8F]'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-200 hover:border-[#0B1F8F] hover:text-[#0B1F8F] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  )
}