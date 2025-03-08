'use client';

import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen pt-16 bg-white overflow-y-auto"
      >
        <main>
          {children}
        </main>
      </motion.div>
    </>
  );
}