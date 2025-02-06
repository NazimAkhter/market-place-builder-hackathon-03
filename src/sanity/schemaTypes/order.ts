import { defineField, defineType } from "sanity";

export default defineType({
    name : "order",
    type : "document",
    title : "Order",
    fields : [
        defineField ({
            name : "firstName",
            title : "First Name",
            type :  "string"
        }),
        
        defineField ({
            name : "lastName",
            title : "Last Name",
            type : "string"
        }),
        defineField({
            name : "address",
            title : "Address",
            type : "string"
        }),
        defineField({
            name : "city",
            title : "City",
            type : "string"
        }),
        defineField ({
            name : "zipcode",
            title : "Zip Code",
            type : "string",
        }),
        defineField({
            name : "contact",
            title : "Contact",
            type : "string"
        }),
        defineField({
            name : "email",
            title : "Email",
            type : "string"
        }),
        defineField({
            name : "delivery",
            title : "Delivery",
            type : "number",
        }),
        defineField ({
            name : "cartItems",
            title : "Cart Items",
            type : "array",
            of : [{type : "reference" , to : { type : "product"}}]
        }),
        defineField({
            name : "total",
            title : "Total",
            type : "number"
        }),
        defineField({
            name : "status",
            title : "Order Status",
            type : "string",
            options : {
                list : [
                    {title : "Pending" , value : "pending"},
                    {title : "Success" , value : "success"},
                    {title : "Dispatch" , value : "dispatch"},
                ],
                layout :  "radio"
            },
            initialValue : "pending"
        }),
    ]

})