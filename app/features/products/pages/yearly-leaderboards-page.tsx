import type { Route } from "@/types";

export function meta(): Route.MetaFunction {
  return [
    { title: "Yearly Leaderboards | WeMake" },
    { name: "description", content: "Top products of the year" },
  ];
}

export function loader({ request, params }: Route.LoaderArgs) {
  const { year } = params;
  return { year };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function YearlyLeaderboardsPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { year } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Top Products of {year}</h1>
      <div className="grid grid-cols-1 gap-6">
        {/* Yearly leaderboard content */}
      </div>
    </main>
  );
}
