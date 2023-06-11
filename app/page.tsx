import Image from "next/image";
import Hero from "@/components/Hero";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/ShowMore";

export default async function Home({searchParams}) {
  const allcars= await fetchCars({
    manufacturer:searchParams.maufacturer || '',
    year:searchParams.year || '2022',
    fuel:searchParams.fuel || '',
    limit:searchParams.limit || '10',
    model:searchParams.model || ''
  });

  const isDataEmpty=!Array.isArray(allcars) || allcars.length<1 || !allcars;
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className=" mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className=" text-4xl font-extrabold"> Car Cataloque</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ?(
          <section>
            <div className="home__cars-wrapper">
              {
                allcars?.map((car)=>(
                  <CarCard car={car}/>
                ))
              }
              
            </div>
            <ShowMore pageNumber={(searchParams.limit ||10)/10} isNext={(searchParams.limit ||10)>allcars.length }/>
          </section>
        ):(<div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Opps no cars found</h2>
          <p>{allcars?.message}</p>
          
        </div>)}
      </div>
    </main>
  );
}
