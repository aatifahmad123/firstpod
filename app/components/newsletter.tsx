"use client";

import { FormEvent, useState } from "react";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
    window.setTimeout(() => setSubscribed(false), 3000);
  }

  return (
    <section className="newsletter" id="subscribe">
      <div>
        <h2>Stay curious.</h2>
        <p>Enter your email to join the Firstpod community and get notifications when new posts are live.</p>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Your email address</label>
        <div className={`input-row ${subscribed ? "subscribed" : ""}`}>
          {subscribed ? (
            <span className="subscription-message" role="status">
              You have been subscribed
            </span>
          ) : (
            <>
              <input id="email" type="email" placeholder="you@example.com" required />
              <button type="submit" aria-label="Subscribe"><ArrowIcon /></button>
            </>
          )}
        </div>
      </form>
    </section>
  );
}
