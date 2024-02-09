import {
  FavoriteDestinationsList,
  LocationFetcher,
  WeatherSummary,
} from "@/components";

const Home = () => (
  <main className="py-8 px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
    <WeatherSummary />
    <LocationFetcher />
    <FavoriteDestinationsList />
  </main>
);

export default Home;
