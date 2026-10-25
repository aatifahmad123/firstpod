import { notFound } from "next/navigation";
import { posts } from "../../posts";
import Newsletter from "../../components/newsletter";
import SiteNav from "../../components/site-nav";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  const recentPosts = posts.filter((item) => item.slug !== post?.slug).slice(0, 3);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <SiteNav latestHref={`/posts/${posts[0].slug}`} contactHref="/#about" subscribeHref="/#subscribe" />

      <article className="post-page">
        <header className="post-page-header">
          <div className="post-page-meta">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="post-page-excerpt">{post.excerpt}</p>
        </header>
        <div className="post-page-body">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="recent-section post-page-recent" id="archive">
        <div className="section-heading">
          <h2>Recent posts</h2>
          <a className="text-link" href="/archive">View all posts</a>
        </div>
        <div className="post-grid">
          {recentPosts.map((recentPost) => (
            <article className={`post-card font-${recentPost.fontColor}`} key={recentPost.slug}>
              <div className={`post-art ${recentPost.accent}`}>
                <div className="post-art-meta">
                  <span>{recentPost.date}</span>
                  <span>{recentPost.readTime}</span>
                </div>
                <h3>{recentPost.title}</h3>
                <p>{recentPost.excerpt}</p>
                <a className="read-link" href={`/posts/${recentPost.slug}`}>
                  Read the post <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Newsletter />

      <footer id="about">
        <span>© 2026 FIRSTPOD</span>
        <span>Made with intention</span>
        <a href="mailto:jammyjellyfish26@proton.me">jammyjellyfish26@proton.me</a>
      </footer>
    </main>
  );
}
