
export interface IProducts {
  filter(arg0: (val: any) => boolean): unknown;
      slug : {
        _type : "slug"
        current : string
    };
    _id : string
    name : string
    price : number
    description : string
    image: string
    tags : string[]
    height: string
    width: string
    depth: string
    categoryName: string
    quantity: number
    features: string[]
    
}

