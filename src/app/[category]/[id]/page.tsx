import ProductDetails from "@/app/components/ProductDetails";
import { client } from "@/sanity/lib/client";

const IdPage = async ({ params }: { params: { id: string } }) => {
  const productDetailQuery = `*[_type == "product" && _id == "${params.id}"]{
    name,
    price,
    description,
    "image": image.asset->url,
    tags,
    features,
    quantity,
    "depth": coalesce(dimensions.depth, "N/A"),
    "width": coalesce(dimensions.width, "N/A"),
    "height": coalesce(dimensions.height, "N/A"),
    "slug": slug.current,
    _id,
    "categoryName": category->name
  }[0]`;

  const product = await client.fetch(productDetailQuery);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p>We couldn&apos;t find the product you&apos;re looking for.</p>
      </div>
    );
  }

  return <ProductDetails product={product} />;
};

export default IdPage;
