import AccessButton from "@/components/AccessButton";
import { client } from "@/sanity/lib/client";

// Define the shape of our data
interface HomePageData {
  instructionTextFive: string;
  buttonTextFive: string;
  buttonLinkFive: string;
}

// Function to fetch data (with revalidation for performance + updates)
async function getData(): Promise<HomePageData> {
  const query = `*[_type == "homePage"][0]{
    instructionTextFive,
    buttonTextFive,
    buttonLinkFive
  }`;
  const data = await client.fetch(query, {}, { next: { revalidate: 60 } });

  // Fallback defaults if Sanity is empty/not connected yet
  if (!data) {
    return {
      instructionTextFive: "Click the button below to join",
      buttonTextFive: "Get Access",
      buttonLinkFive:
        "https://chat.whatsapp.com/E6CVZew1xHFLNHKELbODWC?mode=wwt",
    };
  }

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="background-glow"></div>
      <main>
        <p className="instruction-text">{data.instructionTextFive}</p>
        <AccessButton text={data.buttonTextFive} href={data.buttonLinkFive} />
      </main>
    </div>
  );
}

// wonderful

// please create, instructionTextFive, buttonTextFive, buttonLinkFive on our sanity CMS and this site should use it
