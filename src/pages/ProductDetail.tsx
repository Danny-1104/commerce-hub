import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Truck, Shield, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/lib/store';
import { getProductById } from '@/lib/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id || '');
  const { addItem } = useCart();

  if (!product) {
    return <Layout><div className="container py-16 text-center"><h1 className="text-2xl font-bold">Producto no encontrado</h1><Button asChild className="mt-4"><Link to="/products">Volver a productos</Link></Button></div></Layout>;
  }

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <Layout>
      <div className="container py-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4" />Volver</Link>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex gap-2 mb-4">
              {discount > 0 && <Badge className="bg-destructive">-{discount}%</Badge>}
              {product.tags?.includes('bestseller') && <Badge>Bestseller</Badge>}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-warning text-warning' : 'fill-muted text-muted'}`} />)}</div>
              <span className="text-muted-foreground">({product.reviews.toLocaleString()} reseñas)</span>
            </div>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
              {product.originalPrice && <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>}
            </div>
            <p className="text-muted-foreground mb-6">{product.description}</p>
            <div className="flex gap-3 mb-6">
              <Button size="lg" className="flex-1 gap-2" onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}><ShoppingCart className="h-5 w-5" />Añadir al carrito</Button>
              <Button size="lg" variant="outline"><Heart className="h-5 w-5" /></Button>
            </div>
            <div className="space-y-3 p-4 bg-secondary rounded-xl">
              <div className="flex items-center gap-3"><Truck className="h-5 w-5 text-primary" /><span>Envío gratis en pedidos +$50</span></div>
              <div className="flex items-center gap-3"><Shield className="h-5 w-5 text-primary" /><span>Garantía de 2 años</span></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
