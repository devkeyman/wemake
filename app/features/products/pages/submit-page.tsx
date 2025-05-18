import type { Route } from "@/types";

export function meta(): Route.MetaFunction {
  return [
    { title: "Submit Product | WeMake" },
    { name: "description", content: "Submit your product to the community" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function SubmitPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Submit Your Product</h1>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          {/* Form fields will be added here */}
        </form>
      </div>
    </main>
  );
}
