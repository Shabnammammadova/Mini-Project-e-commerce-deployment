import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div>
      <div className="container mx-auto py-20 px-4 lg:px-0">
        <h1 className="mx-auto uppercase mt-20 text-center text-4xl md:text-5xl lg:text-6xl font-serif">
          Lifestyle
          <p className="text-orange-500">Multipurpose</p> e-commerce shop <br />
          pages
        </h1>
        <p className="text-center mt-5 text-slate-400 font-serif text-sm lg:text-base">
          Discover the ultimate destination for your fashion cravings! Our Shop
          page is a curated gallery
          <br />
          showcasing the latest trends and timeless classics. Indulge in a
          seamless shopping
          <br /> experience, where style meets convenience. Find your next
          wardrobe staple here!
        </p>
        <Button className="mx-auto flex mt-5 w-48 md:w-60 h-10 font-serif">
          VIEW DEMO
        </Button>
      </div>
    </div>
    

  );
}
