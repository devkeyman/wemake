import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/ui/avatar";
import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/common/components/ui/card";

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  authorAvatarUrl: string;
  category: string;
  postedAt: string;
}

export function PostCard({
  id,
  title,
  author,
  authorAvatarUrl,
  category,
  postedAt,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2">
          <Link to={`/community/${id}`}>
            <Avatar className="size-14 mr-2">
              <AvatarFallback>{author}</AvatarFallback>
              {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
            </Avatar>
            <div className="space-y-2">
              <CardTitle>{title}</CardTitle>
              <div className="flex flex-row gap-2 text-sm leading-tight text-muted-foreground">
                <span>{author} on</span>
                <span>{category}</span>
                <span>・</span>
                <span>{postedAt}</span>
              </div>
            </div>
          </Link>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant={"link"} asChild>
            Reply &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
