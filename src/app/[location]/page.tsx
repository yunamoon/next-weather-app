import HomeButton from "../components/HomeButton";

type Props = {
  params: {
    location: string;
  };
};
export default function Home({ params }: Props) {
  const name = params.location === "seoul" ? "서울" : "";

  return (
    <>
      <h1>detail {name} </h1>
      <HomeButton />
    </>
  );
}
