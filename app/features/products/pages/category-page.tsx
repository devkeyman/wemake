import type { Route } from "@/types";

export function meta(): Route.MetaFunction {
  return [
    { title: "Category | WeMake" },
    { name: "description", content: "Browse products in this category" },
  ];
}

export function loader({ request, params }: Route.LoaderArgs) {
  const { category } = params;
  return { category };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function CategoryPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { category } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Products in this category will be rendered here */}
      </div>
    </main>
  );
}
