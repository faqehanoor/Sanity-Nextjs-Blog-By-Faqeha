import Banner from "@/app/components/Banner";
import Blog from "@/app/blog/page";
import Offer from "@/app/Offer/page";
import ContactUs from "@/app/ContactUs.tsx/page";

export default function Home() {
  return (
    <div className="pt-4">
  
      <Banner />

   
      <Blog />

    
      <Offer />

      
      <ContactUs />
    </div>
  );
}
