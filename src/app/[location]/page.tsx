import { getForecast } from "@/utils/getForecast";
import HomeButton from "../components/HomeButton";

export function generateMetadata({ params }: Props) {
  return {
    title: `${params.location}`,
    description: `Details about ${params.location}`,
  };
}
type Props = {
  params: {
    location: string;
  };
};
export default async function Home({ params }: Props) {
  const name = params.location === "seoul" ? "서울" : "";
  const res = await getForecast(params.location);

  return (
    <>
      <h1>{name} </h1>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {" "}
            {day.date} 날씨 {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
