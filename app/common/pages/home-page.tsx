import { ProductCard } from "@/features/products/components/product-card";
import { Link, type MetaFunction } from "react-router";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { PostCard } from "@/features/community/components/post-card";
import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { IdeaCard } from "@/features/ideas/components/idea-card";
import { Badge } from "@/common/components/ui/badge";
import { JobCard } from "@/features/jobs/components/job-card";
import { TeamCard } from "@/features/teams/components/team-card";

export function meta(): MetaFunction {
  return () => [
    { title: "Home | WeMake" },
    { name: "description", content: "Discover and share amazing products" },
  ];
}

export function loader() {
  return {
    hello: "world",
  };
}

export default function HomePage({ loaderData }: { loaderData: any }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to WeMake</h1>
      <p className="text-lg text-gray-600">
        Discover and share amazing products with the community.
      </p>
    </main>
  );
}
