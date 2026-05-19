import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FileText, ArrowRight } from 'lucide-react'

export default function HomepageBlogSection() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:5001'

  useEffect(() => {
    fetch(`${backendUrl}/api/blog?page=1&per_page=3`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setPosts(data.blogs)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [backendUrl])

  const formatDate = (dateString) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <FileText className="w-4 h-4 text-[#0B1F8F]" aria-hidden />
            <span className="text-sm font-semibold text-[#0B1F8F]">Insurance Resources</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Insurance Tips & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert advice on coverage and saving money in Texas.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading latest articles…</p>
        ) : posts.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 mb-6">New articles are published regularly.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#0B1F8F] font-semibold hover:underline"
            >
              View all insights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition border border-slate-200 overflow-hidden"
                >
                  {post.image_url ? (
                    <img
                      src={post.image_url.startsWith('http') ? post.image_url : `${backendUrl}${post.image_url}`}
                      alt=""
                      className="h-48 w-full object-cover"
                    />
                  ) : (
                    <div className="h-48 bg-[#0B1F8F] flex items-center justify-center">
                      <FileText className="w-12 h-12 text-white" aria-hidden />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category || 'Insurance'}
                      </span>
                      <span aria-hidden>•</span>
                      <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0B1F8F] transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post._id}`}
                      className="text-[#0B1F8F] font-semibold hover:text-[#1E3A8A] transition flex items-center gap-2"
                    >
                      Read more <ArrowRight className="w-4 h-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-[#0B1F8F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1C2ED6] transition"
              >
                View all insights <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
