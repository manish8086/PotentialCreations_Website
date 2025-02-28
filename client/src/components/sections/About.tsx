import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          A Bit About Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h3 className="text-2xl mb-4">Our History</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We started Potential Creations in 2000, and since our first day we've brought the best selection 
            of products and merchandise to our customers. Our name has become synonymous with quality throughout 
            the entire San Francisco area. We do our best to ensure a permanent variety of fantastic items along 
            with unique limited edition and seasonal items to fit any budget.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
