import type { Route } from "@/types";

export function meta(): Route.MetaFunction {
  return [
    { title: "Monthly Leaderboards | WeMake" },
    { name: "description", content: "Top products of the month" },
  ];
}

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, month } = params;
  return { year, month };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function MonthlyLeaderboardsPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { year, month } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Top Products of {month}/{year}
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {/* Monthly leaderboard content */}
      </div>
    </main>
  );
}
