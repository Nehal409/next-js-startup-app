import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  // Robust server side form handling
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 100,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "A new way to connect with people",
      image: "/house-of-zen-logo-removebg-preview.png",
      category: "Tech",
      title: "Startup 1",
    },
  ];
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
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
