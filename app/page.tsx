import {
  FavoriteDestinationsList,
  LocationFetcher,
  SearchBar,
  WeatherSummary,
} from "@/components";

const Home = () => (
  <main className="py-8 px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
    <WeatherSummary />
    <LocationFetcher />

    <div className="grid lg:grid-cols-2 gap-6">
      <div className="w-full relative">
        <SearchBar />
      </div>

      <FavoriteDestinationsList />
    </div>
  </main>
);

export default Home;
