import { posts } from "./posts";
import Newsletter from "./components/newsletter";
import SiteNav from "./components/site-nav";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  // Sort posts by date in descending order (most recent first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Most recent post is the featured post with orange bg and cream font
  const latest = { ...sortedPosts[0], accent: "orange" as const, fontColor: "cream" as const };
  
  // Next 3 most recent posts with specific color patterns
  const recentPosts = sortedPosts.slice(1, 4).map((post, index) => {
    const colorPatterns = [
      { accent: "taupe" as const, fontColor: "ink" as const },      // First post
      { accent: "stone" as const, fontColor: "cream" as const },    // Second post
      { accent: "ink" as const, fontColor: "cream" as const },      // Third post
    ];
    return { ...post, ...colorPatterns[index] };
  });

  return (
    <main>
      <SiteNav latestHref={`/posts/${latest.slug}`} contactHref="#about" />

      <section className="intro" id="latest">
        <h1>
          <span>Beyond the <em>surface.</em></span>
        </h1>
        <p className="intro-copy">
          Regular posts on software, AI, systems, and the ideas shaping the
          world.
        </p>
      </section>

      <section className="featured-wrap">
        <article className={`featured-card ${latest.accent} font-${latest.fontColor}`}>
          <div className="featured-art">
            <span className="art-label">Curiosity, compiled.</span>
            <div className="art-grid" aria-hidden="true">
              {Array.from({ length: 48 }, (_, index) => (
                <span className="art-grid-cell" key={index} />
              ))}
            </div>
          </div>
          <div className="featured-content">
            <div className="post-meta"><span>{latest.date}</span><span>{latest.readTime}</span></div>
            <h2>{latest.title}</h2>
            <p>{latest.excerpt}</p>
            <a className="read-link" href={`/posts/${latest.slug}`}>
              Read the post <ArrowIcon />
            </a>
          </div>
        </article>
      </section>

      <section className="recent-section" id="archive">
        <div className="section-heading">
          <h2>Recent posts</h2>
          <a className="text-link" href="/archive">View all posts</a>
        </div>
        <div className="post-grid">
          {recentPosts.map((post) => (
            <article className={`post-card font-${post.fontColor}`} key={post.slug}>
              <div className={`post-art ${post.accent}`}>
                <div className="post-art-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a className="read-link" href={`/posts/${post.slug}`}>Read the post <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Newsletter />

      <footer id="about">
        <span>© 2026 Firstpod</span>
        <span>Made with intention</span>
        <a href="mailto:jammyjellyfish26@proton.me">jammyjellyfish26@proton.me</a>
      </footer>
    </main>
  );
}
