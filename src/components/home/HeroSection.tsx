import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Main hero */}
      <div className="bg-gradient-dark relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920')] opacity-20 bg-cover bg-center" />
        <div className="container relative py-16 md:py-24 lg:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                🎉 Ofertas de Temporada
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
                Descubre el futuro de las{' '}
                <span className="text-gradient">compras online</span>
              </h1>
              <p className="text-lg text-background/80 mb-8 max-w-lg">
                Miles de productos con los mejores precios. Envío rápido y devoluciones gratuitas en toda la tienda.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-gradient-primary hover:opacity-90 transition-opacity">
                  <Link to="/products">
                    Explorar productos
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/10 border-background/20 text-background hover:bg-background/20">
                  <Link to="/products?featured=true">
                    Ver ofertas
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features bar */}
      <div className="bg-background border-b">
        <div className="container py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Envío Gratis</h3>
                <p className="text-sm text-muted-foreground">En pedidos +$50</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Compra Segura</h3>
                <p className="text-sm text-muted-foreground">Protección al comprador</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Devolución Fácil</h3>
                <p className="text-sm text-muted-foreground">30 días para devolver</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
