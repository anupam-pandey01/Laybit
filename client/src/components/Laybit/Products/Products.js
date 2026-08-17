"use client"
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "./ProductCard";
import { products } from "@/constants/products";

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Products"
          title="One platform, growing every quarter."
          description="Every product is built to the same standard—and works together from a single account."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
