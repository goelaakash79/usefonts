"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export default function ShadcnExample() {
    return (
        <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold">Shadcn/UI Components Example</h2>

            {/* Button Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Buttons</h3>
                <div className="flex gap-4 flex-wrap">
                    <Button variant="default">Default Button</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>
                <Switch className="w-100" />
            </div>

            {/* Input Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Inputs</h3>
                <div className="flex gap-4 flex-wrap">
                    <Input placeholder="Enter your text here..." className="w-64" />
                    <Input type="email" placeholder="Enter your email..." className="w-64" />
                    <Input type="password" placeholder="Enter your password..." className="w-64" />
                </div>
            </div>

            {/* Card Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Font Preview</CardTitle>
                            <CardDescription>Preview and test different fonts</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                This is a sample card showing how shadcn components can be used in your font preview application.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Try Font</Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Typography</CardTitle>
                            <CardDescription>Beautiful typography components</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Shadcn provides consistent styling and excellent accessibility out of the box.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Learn More</Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Customizable</CardTitle>
                            <CardDescription>Easy to customize and extend</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                All components are built with Tailwind CSS and can be easily customized to match your design.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="secondary" className="w-full">Customize</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
} 