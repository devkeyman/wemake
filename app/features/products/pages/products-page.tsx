import type { Route } from "../../../types";

export function meta(): Route.MetaFunction {
  return [
    { title: "Products | WeMake" },
    { name: "description", content: "Browse and discover amazing products" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function ProductsPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product cards will be rendered here */}
      </div>
    </main>
  );
}
