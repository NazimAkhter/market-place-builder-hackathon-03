import { IProducts } from '@/types/productTypes';
import { client } from '@/sanity/lib/client';
import Category from '../components/Category';
import SelectButton from '../components/common/SelectButton';

// Fetch data on the server
async function getData(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"]{
    "image": image.asset->url,
    name,
    price,
    _id,
    "slug": slug.current,
    "categoryName": category->name,
  }`;

  const data = await client.fetch(query);
  return data;
}

// Server Component
export default async function Page({ params }: { params: { category: string } }) {
  const products: IProducts[] = await getData(params.category); // Fetch data here

  return (
    <div>
       <div className="block lg:hidden mt-72">
       <SelectButton />
        </div>
      <Category products={products} category={params.category} /> {/* Pass as props */}
    </div>
  );
}
