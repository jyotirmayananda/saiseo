"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import Input from "@/components/ui/Input";
import ResultCard from "@/components/result/ResultCard";
import { Search, AlertCircle } from "lucide-react";

const rollSchema = z.object({
  rollNumber: z.string().min(1, "Roll number is required"),
});

type RollFormData = z.infer<typeof rollSchema>;

interface ResultData {
  student: {
    name: string;
    rollNumber: string;
    course: string;
    fatherName: string;
  };
  results: {
    subjectName: string;
    marksObtained: number;
    maxMarks: number;
  }[];
  totalObtained: number;
  totalMax: number;
  percentage: number;
  grade: string;
  passed: boolean;
}

export default function ResultPage() {
  const [result, setResult] = useState<ResultData | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RollFormData>({
    resolver: zodResolver(rollSchema),
  });

  const onSubmit = async (data: RollFormData) => {
    setLoading(true);
    setNotFound(false);
    setResult(null);

    try {
      const res = await fetch(
        `/api/result/${encodeURIComponent(data.rollNumber.trim())}`
      );
      if (res.status === 404) {
        setNotFound(true);
        return;
      }
      if (!res.ok) throw new Error("Failed to fetch result");
      const json = await res.json();
      setResult(json);
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-black pt-24">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      <div className="relative mx-auto max-w-lg px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="section-label">Results Portal</p>
          <h1 className="headline-lg mt-3 text-white">Check your result.</h1>
          <p className="mt-3 text-[#86868b]">
            Enter your roll number to view examination results.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <Input
            dark
            label="Roll Number"
            placeholder="e.g. SEO2024001"
            error={errors.rollNumber?.message}
            {...register("rollNumber")}
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-teal py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-dark disabled:opacity-50"
          >
            <Search size={18} />
            {loading ? "Checking..." : "Check Result"}
          </button>
        </motion.form>

        <AnimatePresence mode="wait">
          {notFound && (
            <motion.div
              key="not-found"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-6 flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-300"
            >
              <AlertCircle size={20} />
              <p className="text-sm">
                No result found. Please verify your roll number.
              </p>
            </motion.div>
          )}

          {result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="mt-8"
            >
              <ResultCard data={result} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
