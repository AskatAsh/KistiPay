import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Header />
      <main className="min-h-dvh pt-40 mb-40">
        <h1>Home</h1>
        <Button>Click Here</Button>
      </main>
    </div>
  );
}
