import { posts } from "../posts";
import SiteNav from "../components/site-nav";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ArchivePage() {
  return (
    <main>
      <SiteNav latestHref={`/posts/${posts[0].slug}`} contactHref="/#about" subscribeHref="/#subscribe" />
      <section className="archive-page">
        <div className="archive-heading">
          <h1>All posts</h1>
        </div>
        <div className="archive-grid">
          {posts.map((post) => (
            <article className={`archive-card ${post.accent} font-${post.fontColor}`} key={post.slug}>
              <div className="archive-card-top">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a className="read-link" href={`/posts/${post.slug}`}>
                Read the post <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>
      <footer id="about">
        <span>© 2026 FIRSTPOD</span>
        <span>Made with intention</span>
        <a href="mailto:jammyjellyfish26@proton.me">jammyjellyfish26@proton.me</a>
      </footer>
    </main>
  );
}
