import type { Route } from "@/types";

export function meta(): Route.MetaFunction {
  return [
    { title: "Search Products | WeMake" },
    { name: "description", content: "Search for products" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  return { query };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function SearchPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { query } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Search Results</h1>
      {query && (
        <p className="text-lg text-gray-600 mb-6">
          Showing results for: {query}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Search results will be rendered here */}
      </div>
    </main>
  );
}
