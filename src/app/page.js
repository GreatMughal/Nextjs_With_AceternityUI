import Featured from "@/components/Featured";
import Herosection from "@/components/Herosection";
import Testimonials from "@/components/Testimonials";
import Webinar from "@/components/Webinar";



export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] bg-grid-white/[0.02] antialiased">
      <Herosection />
      <Featured />
      <Testimonials />
      <Webinar />
    </div>

  );
}
