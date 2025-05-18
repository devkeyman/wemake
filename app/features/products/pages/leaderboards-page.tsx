import type { Route } from "@/types";

export function meta(): Route.MetaFunction {
  return [
    { title: "Leaderboards | WeMake" },
    { name: "description", content: "Top products and trends" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function LeaderboardsPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Leaderboards</h1>
      <div className="grid grid-cols-1 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Daily Top Products</h2>
          {/* Daily leaderboard content */}
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Weekly Top Products</h2>
          {/* Weekly leaderboard content */}
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Monthly Top Products</h2>
          {/* Monthly leaderboard content */}
        </section>
      </div>
    </main>
  );
}
