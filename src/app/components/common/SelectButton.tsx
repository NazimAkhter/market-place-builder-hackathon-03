import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import Link from "next/link";

  import React from 'react'
  
  export default function SelectButton() {
    return (

        <Select>
        <SelectTrigger className="w-[180px] text-darkPrimary bg-lightGray rounded-full border-none mx-auto -mt-56 mb-12">
          <SelectValue placeholder="Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Plant Pots"><Link href="/PlantPots">Plant Pots</Link></SelectItem>
          <SelectItem value="Ceramics"><Link href="/Ceramics">Ceramics</Link></SelectItem>
          <SelectItem value="Tables"><Link href="/Tables">Tables</Link></SelectItem>
          <SelectItem value="Chairs"><Link href="/Chairs">Chairs</Link></SelectItem>
          <SelectItem value="Crockery"><Link href="/Crockery">Crockery</Link></SelectItem>
          <SelectItem value="Tableware"><Link href="/Tableware">Tableware</Link></SelectItem>
          <SelectItem value="Cutlery"><Link href="/Cutlery">Cutlery</Link></SelectItem>
        </SelectContent>
      </Select>
      
        
    )
    }
  
  
  