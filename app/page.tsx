import { getCollections } from "@/utils/api/getCollections";

export default function Home() {
  console.log(getCollections("undervalued_growth_stocks"));
  return (
    <main className="overflow-hidden">
      <div className="text-center pt-28 mb-10">
        <h1 className="text-4xl">Portfolios by Stock Category</h1>
      </div>
    </main>
  );
}
