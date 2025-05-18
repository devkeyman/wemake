import type { Route } from "@/types";

export function meta(): Route.MetaFunction {
  return [
    { title: "Promote Product | WeMake" },
    {
      name: "description",
      content: "Promote your product to reach more users",
    },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function PromotePage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Promote Your Product</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Promotion Options</h2>
          <div className="space-y-6">
            {/* Promotion options will be added here */}
          </div>
        </div>
      </div>
    </main>
  );
}
