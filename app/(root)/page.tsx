export default function Home() {
  return (
    <>
      <section className="pink_container">
        {/* Calling tailwind utility class "heading" defined in the global.css file. */}
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Notified in Virtual Competition
        </p>
      </section>
    </>
  );
}
