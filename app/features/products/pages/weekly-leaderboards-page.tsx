import type { Route } from "@/types";

export function meta(): Route.MetaFunction {
  return [
    { title: "Weekly Leaderboards | WeMake" },
    { name: "description", content: "Top products of the week" },
  ];
}

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, week } = params;
  return { year, week };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function WeeklyLeaderboardsPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { year, week } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Top Products of Week {week}, {year}
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {/* Weekly leaderboard content */}
      </div>
    </main>
  );
}
