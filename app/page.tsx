import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-40">
        <h1>Home</h1>
        <Button>Click Here</Button>
      </main>
      <Footer />
    </div>
  );
}
