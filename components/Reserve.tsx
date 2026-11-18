"use client";

import { useEffect, useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "done";

// YYYY-MM-DD in the visitor's own time zone (toISOString() would give the UTC date).
function localDateString(d = new Date()) {
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

export default function Reserve() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  // Set in the browser after load, not during the server/build render,
  // so the earliest bookable date is always the visitor's real "today".
  const [today, setToday] = useState<string>();

  useEffect(() => {
    setToday(localDateString());
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setName(String(data.name ?? ""));
    setStatus("sending");

    // For a real client: send `data` to an API route, email service or Supabase here.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("done");
  }

  return (
    <section className="section reserve" id="reserve">
      {/* Revealed as one block: the form and the "See you soon" card swap places, so they can't be watched separately */}
      <div className="container reserve__inner" data-reveal>
        <div className="reserve__intro">
          <p className="eyebrow">Reservations</p>
          <h2>Save yourself a seat.</h2>
          <p>
            Walk-ins are always welcome, but weekend brunch fills up fast. For groups bigger than 8, call us
            on <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>.
          </p>
        </div>

        {status === "done" ? (
          <div className="reserve__card reserve__success" role="status">
            <h3>See you soon{name ? `, ${name.split(" ")[0]}` : ""}!</h3>
            <p>We&apos;ve received your request and will confirm on WhatsApp within the hour.</p>
            <button className="btn btn--ghost" onClick={() => setStatus("idle")}>
              Make another booking
            </button>
          </div>
        ) : (
          <form className="reserve__card form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" required placeholder="Your name" autoComplete="name" />
            </label>
            <label>
              Phone (WhatsApp)
              <input name="phone" type="tel" required placeholder="98XXX XXXXX" autoComplete="tel" />
            </label>
            <div className="form__row">
              <label>
                Date
                <input name="date" type="date" required min={today} />
              </label>
              <label>
                Time
                <select name="time" required defaultValue="">
                  <option value="" disabled>
                    Pick a time
                  </option>
                  {["9:00 am", "11:00 am", "1:00 pm", "4:00 pm", "7:00 pm", "9:00 pm"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label>
                Guests
                <select name="guests" defaultValue="2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              <span>
                Anything we should know? <span className="muted">(optional)</span>
              </span>
              <textarea name="notes" rows={3} placeholder="Birthday, high chair, window seat…" />
            </label>
            <button className="btn btn--full" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Request booking"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
