import { Link } from "react-router";
import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";
import { Badge } from "@/common/components/ui/badge";

interface JobCardProps {
  id: string;
  company: string;
  companyLogoUrl: string;
  companyHq: string;
  title: string;
  postedAt: string;
  type: string;
  positionLocation: string;
  salary: {
    min: number;
    max: number;
  };
}

export function JobCard({
  id,
  company,
  companyLogoUrl,
  companyHq,
  title,
  postedAt,
  type,
  positionLocation,
  salary,
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`}>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4 mb-8">
            <img
              src={companyLogoUrl}
              alt={`${company} Logo`}
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{company}</span>
              <span className="text-xs text-muted-foreground">{postedAt}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="outline">{type}</Badge>
          <Badge variant="outline">{positionLocation}</Badge>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">
              ${salary.min.toLocaleString()} ~ ${salary.max.toLocaleString()}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {companyHq}
            </span>
          </div>
          <Button variant="secondary" size="sm">
            Apply now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
