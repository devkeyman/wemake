import type { Route } from "@/types";

export function meta(): Route.MetaFunction {
  return [
    { title: "Daily Leaderboards | WeMake" },
    { name: "description", content: "Top products of the day" },
  ];
}

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, month, day } = params;
  return { year, month, day };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function DailyLeaderboardsPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { year, month, day } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Top Products of {day}/{month}/{year}
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {/* Daily leaderboard content */}
      </div>
    </main>
  );
}
