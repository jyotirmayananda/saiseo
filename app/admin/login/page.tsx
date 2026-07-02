"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Input from "@/components/ui/Input";
import { loginSchema, LoginFormData } from "@/lib/validations";
import { Lock, ChevronLeft } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Login failed");
        return;
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-teal/20" />
        <div className="hero-aurora absolute inset-0 opacity-40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-white"
        >
          <ChevronLeft size={16} />
          Back to website
        </Link>

        <div className="mb-8">
          <Image src="/logo.svg" alt="Sai SEO" width={48} height={48} />
          <h1 className="mt-4 font-heading text-3xl font-semibold text-white">
            Admin Login
          </h1>
          <p className="mt-2 text-[#86868b]">
            Sign in to manage students and results.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl border border-white/10 bg-[#1d1d1f]/80 p-8 backdrop-blur-xl"
        >
          <Input
            dark
            label="Email"
            type="email"
            placeholder="admin@saiseo.com"
            error={errors.email?.message}
            {...register("email")}
          />
          <div className="mt-4">
            <Input
              dark
              label="Password"
              type="password"
              placeholder="••••••••"
              error={errors.password?.message}
              {...register("password")}
            />
          </div>

          {error && (
            <p className="mt-4 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-teal py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-dark disabled:opacity-50"
          >
            <Lock size={16} />
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/30">
          Default: admin@saiseo.com / admin123
        </p>
      </motion.div>
    </div>
  );
}
