import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
export default function Home() {
  return (
    <div className="my-10 h-screen flex justify-center items-center">
      <Card className="w-[400px]">
        <CardHeader>
          <p>Left</p> <p>Right</p>
        </CardHeader>
        <CardContent>
          <CardTitle>Tour Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardContent>
        <CardFooter>
          <p>Left</p> <p>Right</p>
        </CardFooter>
      </Card>
    </div>
  );
}
