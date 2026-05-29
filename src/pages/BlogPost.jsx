import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, User, Tag, ArrowLeft, Clock, Share2, ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'
import usePageMeta from '../hooks/usePageMeta'

export default function BlogPost() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:5001'

  useEffect(() => {
    fetchBlog()
  }, [id])

  usePageMeta({
    title: blog?.title ? `${blog.title} | Inshora Blog` : 'Blog Post | Inshora Group',
    description: blog?.meta_description || blog?.excerpt || 'Insurance insights from Inshora Group.',
  })

  const fetchBlog = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${backendUrl}/api/blog/${id}`)
      const data = await response.json()
      
      if (data.success) {
        setBlog(data.blog)
      } else {
        setError(data.error || 'Failed to fetch blog post')
      }
    } catch (err) {
      setError('Error connecting to server')
      console.error('Error fetching blog post:', err)
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

  const formatContent = (content) => {
    // Simple markdown-like formatting
    return content
      .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-gray-900 mt-8 mb-4">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>')
      .replace(/\n\n/g, '</p><p class="text-gray-700 mb-4 leading-relaxed">')
      .replace(/\n/g, '<br/>')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B1F8F] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog post...</p>
        </div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">{error || 'Blog post not found'}</p>
          <Link to="/blog" className="inline-block mt-4 text-[#0B1F8F] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      {/* Header Image */}
      {blog.image_url && (
        <div className="h-64 md:h-96 bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] relative overflow-hidden">
          <img
            src={blog.image_url.startsWith('http') ? blog.image_url : `${backendUrl}${blog.image_url}`}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#0B1F8F] hover:text-[#1C2ED6] mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          {blog.author && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{blog.author}</span>
            </div>
          )}
          {blog.created_at && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blog.created_at)}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>5 min read</span>
          </div>
        </div>

        {/* Category */}
        {blog.category && (
          <span className="inline-block bg-[#0B1F8F]/10 text-[#0B1F8F] text-sm font-semibold px-4 py-1 rounded-full mb-6">
            {blog.category}
          </span>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {blog.title}
        </h1>

        {/* Excerpt */}
        {blog.excerpt && (
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {blog.excerpt}
          </p>
        )}

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: `<p class="text-gray-700 mb-4 leading-relaxed">${formatContent(blog.content)}</p>` }}
          />
        </div>

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">Share this article</p>
            <button className="flex items-center gap-2 text-[#0B1F8F] hover:text-[#1C2ED6] transition">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Insurance Help?</h3>
          <p className="text-blue-100 mb-6">
            Get personalized quotes from 25+ A-rated carriers in minutes.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 bg-white text-[#0B1F8F] px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Get Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Layout>
  )
}
