import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/ProductCard';
import { getFeaturedProducts } from '@/lib/products';

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Productos destacados</h2>
            <p className="text-muted-foreground">Las mejores ofertas seleccionadas para ti</p>
          </div>
          <Button asChild variant="ghost" className="gap-2 hidden sm:flex">
            <Link to="/products?featured=true">
              Ver todos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/products?featured=true">
              Ver todos los productos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
