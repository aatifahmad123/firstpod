"use client";

import { useState, useMemo } from "react";
import { posts } from "../posts";
import Newsletter from "../components/newsletter";
import SiteNav from "../components/site-nav";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path d="M4 6h16M7 12h10M10 18h4" />
    </svg>
  );
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export default function ArchivePage() {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique years from posts and sort them
  const availableYears = useMemo(() => {
    const years = posts.map((post) => {
      const date = new Date(post.date);
      return date.getFullYear();
    });
    return Array.from(new Set(years)).sort((a, b) => b - a);
  }, []);

  // Extract unique months from posts for the selected year
  const availableMonths = useMemo(() => {
    if (selectedYear === "all") {
      return [];
    }
    const months = posts
      .filter((post) => {
        const postYear = new Date(post.date).getFullYear();
        return postYear === parseInt(selectedYear);
      })
      .map((post) => {
        const date = new Date(post.date);
        return date.getMonth();
      });
    return Array.from(new Set(months)).sort((a, b) => a - b);
  }, [selectedYear]);

  // Filter posts based on selected year and month
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const postDate = new Date(post.date);
      const postYear = postDate.getFullYear();
      const postMonth = postDate.getMonth();

      if (selectedYear !== "all" && postYear !== parseInt(selectedYear)) {
        return false;
      }
      if (selectedMonth !== "all" && postMonth !== parseInt(selectedMonth)) {
        return false;
      }
      return true;
    });
  }, [selectedYear, selectedMonth]);

  // Reset month filter when year changes
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setSelectedMonth("all");
  };

  return (
    <main>
      <SiteNav latestHref={`/posts/${posts[0].slug}`} contactHref="/#about" />
      <section className="archive-page">
        <div className="archive-heading">
          <div className="archive-title-row">
            <h1>All posts</h1>
            <button 
              className="filter-toggle"
              onClick={() => setShowFilters(!showFilters)}
              aria-label="Toggle filters"
            >
              <FilterIcon />
            </button>
          </div>
          <div className={`filter-controls ${showFilters ? 'show-mobile' : ''}`}>
            <label htmlFor="year-filter" className="filter-label">
              Filter by:
            </label>
            <select
              id="year-filter"
              className="year-filter"
              value={selectedYear}
              onChange={(e) => handleYearChange(e.target.value)}
            >
              <option value="all">All years</option>
              {availableYears.map((year) => (
                <option key={year} value={year.toString()}>
                  {year}
                </option>
              ))}
            </select>
            {selectedYear !== "all" && availableMonths.length > 0 && (
              <select
                id="month-filter"
                className="month-filter"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                <option value="all">All months</option>
                {availableMonths.map((monthIndex) => (
                  <option key={monthIndex} value={monthIndex.toString()}>
                    {MONTHS[monthIndex]}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
        <div className="archive-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
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
            ))
          ) : (
            <p className="no-results">
              No posts found for {selectedYear !== "all" && selectedMonth !== "all" 
                ? `${MONTHS[parseInt(selectedMonth)]} ${selectedYear}`
                : selectedYear !== "all" 
                ? selectedYear 
                : "this filter"}.
            </p>
          )}
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
