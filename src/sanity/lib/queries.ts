
export const allProduct = `*[_type == "product" || category->name]{
    name,
    quantity,
    price,
    description,
    "image": image.asset->url,
    tags,
    "slug": slug.current,
     _id,
    "categoryName" : category->name,
  }[]`;


