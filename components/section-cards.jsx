import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useFontLoader, createFontPreviewStyle } from "../lib/font-loader"

export function SectionCards({ font }) {
  const { isLoaded, isLoading } = useFontLoader(font?.family)
  const fontStyle = createFontPreviewStyle(font?.family, isLoaded)
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-normal text-gray font-['Space_Mono'] uppercase tracking-tighter">CARDS</div>
      <div
        className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-2 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4">

        <Card className="@container/card">
          <CardHeader>
            <CardDescription style={fontStyle}>Total Revenue</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl" style={fontStyle}>
              $1,250.00
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <IconTrendingUp />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium" style={fontStyle}>
              Trending up this month <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground" style={fontStyle}>
              Visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card">
          <CardHeader>
            <CardDescription style={fontStyle}>New Customers</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl" style={fontStyle}>
              1,234
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <IconTrendingDown />
                -20%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium" style={fontStyle}>
              Down 20% this period <IconTrendingDown className="size-4" />
            </div>
            <div className="text-muted-foreground" style={fontStyle}>
              Acquisition needs attention
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
