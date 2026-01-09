import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '@/lib/products';

export function CategoriesSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Explora por categorías</h2>
          <p className="text-muted-foreground">Encuentra lo que buscas fácilmente</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/products?category=${category.id}`}
                className="group block p-6 bg-card border rounded-xl text-center hover:shadow-lg hover:border-primary transition-all duration-300"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
