import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function PromoSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Promo 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 md:p-10 min-h-[280px] flex flex-col justify-end"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
                alt="Tech deals"
                className="w-full h-full object-cover opacity-40"
              />
            </div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-background/20 rounded-full text-sm text-primary-foreground mb-3">
                Hasta 40% OFF
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Tecnología Premium
              </h3>
              <p className="text-primary-foreground/80 mb-4 max-w-xs">
                Los mejores gadgets y accesorios tech con descuentos increíbles
              </p>
              <Button asChild variant="secondary">
                <Link to="/products?category=electronics">Comprar ahora</Link>
              </Button>
            </div>
          </motion.div>

          {/* Promo 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-dark p-8 md:p-10 min-h-[280px] flex flex-col justify-end"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400"
                alt="Fashion deals"
                className="w-full h-full object-cover opacity-40"
              />
            </div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-primary/20 rounded-full text-sm text-primary mb-3">
                Nueva Colección
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-background mb-2">
                Moda & Estilo
              </h3>
              <p className="text-background/80 mb-4 max-w-xs">
                Descubre las últimas tendencias en moda para toda la familia
              </p>
              <Button asChild className="bg-gradient-primary hover:opacity-90">
                <Link to="/products?category=fashion">Explorar moda</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
