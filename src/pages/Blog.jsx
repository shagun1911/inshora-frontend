import { useState, useEffect } from 'react'
import { Calendar, User, ArrowRight, BookOpen, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import PageCta from '../components/PageCta'
import usePageMeta from '../hooks/usePageMeta'
import { BLOG_TOPICS } from '../data/siteContent'

export default function Blog() {
  usePageMeta({
    title: 'Insurance Blog | Inshora Group',
    description: 'Texas insurance tips, coverage guides, and savings advice from Inshora Group.',
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
      setError(null)
      const response = await fetch(`${backendUrl}/api/blog?page=${page}&per_page=9`)
      const data = await response.json()
      if (data.success) {
        setBlogs(data.blogs)
        setTotalPages(data.pagination.pages)
      } else {
        setError(data.error || 'Failed to fetch articles')
      }
    } catch {
      setError('Unable to load articles. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <Layout>
      <PageHeader
        badge="Resources & insights"
        title="Insurance knowledge for Texas"
        subtitle="Expert guides on auto, home, flood, and savings — written to help you make confident coverage decisions."
      />

      {/* Topics intro */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-[#0B1F8F]" />
                <h2 className="text-lg font-bold text-slate-900">What we write about</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our blog complements the work our agents do every day — explaining Texas-specific rules, common coverage gaps, and practical ways to save without sacrificing protection. Articles are updated regularly and written for real homeowners and drivers, not industry insiders.
              </p>
              <Link to="/quote" className="inline-flex items-center gap-2 text-[#0B1F8F] font-semibold text-sm hover:gap-3 transition-all">
                Ready for a quote? Start the wizard <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {BLOG_TOPICS.map((topic) => (
                <div key={topic.title} className="bg-white rounded-xl border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">{topic.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{topic.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Latest articles</h2>
            {!loading && blogs.length > 0 && (
              <p className="text-sm text-slate-500">{blogs.length} articles on this page</p>
            )}
          </div>

          {loading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-10 w-10 border-2 border-[#0B1F8F] border-t-transparent mx-auto" />
              <p className="mt-4 text-slate-600 text-sm">Loading articles…</p>
            </div>
          ) : error ? (
            <div className="text-center py-16 rounded-2xl bg-red-50 border border-red-100">
              <p className="text-red-700">{error}</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-16 rounded-2xl bg-slate-50 border border-slate-200">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600 mb-2">New articles are published regularly.</p>
              <p className="text-sm text-slate-500">Check back soon or contact us for coverage questions.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {blogs.map((blog) => (
                  <Link
                    key={blog._id}
                    to={`/blog/${blog._id}`}
                    className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-44 bg-[#071654] overflow-hidden">
                      {blog.image_url ? (
                        <img
                          src={blog.image_url.startsWith('http') ? blog.image_url : `${backendUrl}${blog.image_url}`}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="h-full flex items-center justify-center text-blue-200 text-sm">Inshora Group</div>
                      )}
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      {blog.category && (
                        <span className="text-xs font-semibold text-[#0B1F8F] uppercase tracking-wide mb-2">{blog.category}</span>
                      )}
                      <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-[#0B1F8F] transition-colors">
                        {blog.title}
                      </h3>
                      {blog.excerpt && (
                        <p className="text-sm text-slate-600 line-clamp-3 flex-1 mb-4">{blog.excerpt}</p>
                      )}
                      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-3">
                          {blog.author && (
                            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{blog.author}</span>
                          )}
                          {blog.created_at && (
                            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(blog.created_at)}</span>
                          )}
                        </div>
                        <span className="text-[#0B1F8F] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium disabled:opacity-40 hover:border-[#0B1F8F] transition"
                  >
                    Previous
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      type="button"
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition ${
                        currentPage === i + 1 ? 'bg-[#0B1F8F] text-white' : 'border border-slate-200 hover:border-[#0B1F8F]'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium disabled:opacity-40 hover:border-[#0B1F8F] transition"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <PageCta
        title="Questions after reading?"
        text="Talk to Sarah by voice, start the quote wizard, or call our Sugar Land team."
        primaryLabel="Get a quote"
      />
    </Layout>
  )
}
