import AccessButton from "@/components/AccessButton";
import { client } from "@/sanity/lib/client";

// Define the shape of our data
interface HomePageData {
  instructionTextOne: string;
  buttonTextOne: string;
  buttonLinkOne: string;
}

// Function to fetch data (with revalidation for performance + updates)
async function getData(): Promise<HomePageData> {
  const query = `*[_type == "homePage"][0]`;
  const data = await client.fetch(query, {}, { next: { revalidate: 0 } });

  // Fallback defaults if Sanity is empty/not connected yet
  if (!data) {
    return {
      instructionTextOne: "Click the button below to join",
      buttonTextOne: "Get Access",
      buttonLinkOne: "https://chat.whatsapp.com/E6CVZew1xHFLNHKELbODWC?mode=wwt",
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
        <p className="instruction-text">{data.instructionTextOne}</p>
        <AccessButton text={data.buttonTextOne} href={data.buttonLinkOne} />
      </main>
    </div>
  );
}

// wonderful

