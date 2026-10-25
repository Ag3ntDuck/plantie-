"use client"
import {useParams} from "next/navigation";
import CatalogPage from "@/moduls/catalog/ui/catalogPage/CatalogPage";

export default function RouteTest() {
    const { id } = useParams();
    return (
      <CatalogPage/>
    )
}