"use client";

import { FormEvent, ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { ENQUIRY_WORKSPACE_OPTIONS } from "@/lib/data";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  currentTeamSize: string;
  expectedTeamSize: string;
  workspaceRequirement: string;
  moveInDate: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  currentTeamSize: "",
  expectedTeamSize: "",
  workspaceRequirement: "",
  moveInDate: "",
  message: "",
};

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-stone-light">
        {label}
      </span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 block text-xs text-red-400"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-gold-hair/30 bg-charcoal/50 px-4 py-3 text-sm text-cream placeholder:text-stone/60 outline-none transition-all duration-300 focus:border-gold-bright focus:bg-charcoal/80 focus:shadow-gold-sm";

export function Enquiry() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) {
      next.phone = "Please enter your phone number.";
    } else if (!/^[\d\s+()-]{7,}$/.test(form.phone)) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!form.workspaceRequirement) {
      next.workspaceRequirement = "Please select a workspace requirement.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Frontend-only: no backend wired up yet.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="enquiry" className="relative bg-charcoal/30 py-28 sm:py-36">
        <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center sm:px-8">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
            className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-bright bg-gold/10 shadow-gold"
          >
            <CheckCircle2 className="h-8 w-8 text-gold-bright" strokeWidth={1.5} />
          </motion.div>
          <h2 className="mt-8 font-display text-3xl text-cream sm:text-4xl">
            Enquiry received.
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-light">
            Thank you, {form.name.split(" ")[0]}. The CPJK team will get back
            to you shortly to discuss your requirements.
          </p>
          <button
            onClick={() => {
              setForm(initialState);
              setSubmitted(false);
            }}
            className="mt-8 inline-flex items-center rounded-full border border-gold-hair/50 px-6 py-3 text-sm text-cream transition-colors duration-300 hover:border-gold-bright hover:text-gold-bright"
          >
            Send another enquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiry" className="relative bg-charcoal/30 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold">
            Enquiry
          </span>
          <h2 className="mx-auto mt-5 max-w-lg font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
            Tell us what your team needs.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-14 rounded-[2rem] border border-gold-hair/25 bg-ink/50 p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input
                  className={inputClass}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your full name"
                />
              </Field>
              <Field label="Company">
                <input
                  className={inputClass}
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Company name"
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@company.com"
                />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input
                  type="tel"
                  className={inputClass}
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+91 00000 00000"
                />
              </Field>
              <Field label="Current Team Size">
                <input
                  type="number"
                  min={0}
                  className={inputClass}
                  value={form.currentTeamSize}
                  onChange={(e) => update("currentTeamSize", e.target.value)}
                  placeholder="e.g. 6"
                />
              </Field>
              <Field label="Expected Team Size">
                <input
                  type="number"
                  min={0}
                  className={inputClass}
                  value={form.expectedTeamSize}
                  onChange={(e) => update("expectedTeamSize", e.target.value)}
                  placeholder="e.g. 12"
                />
              </Field>
              <Field label="Workspace Requirement" error={errors.workspaceRequirement}>
                <select
                  className={`${inputClass} appearance-none`}
                  value={form.workspaceRequirement}
                  onChange={(e) => update("workspaceRequirement", e.target.value)}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {ENQUIRY_WORKSPACE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred Move-in Date">
                <input
                  type="date"
                  className={inputClass}
                  value={form.moveInDate}
                  onChange={(e) => update("moveInDate", e.target.value)}
                />
              </Field>
              <Field label="Message" error={errors.message} className="sm:col-span-2">
                <textarea
                  className={`${inputClass} min-h-[120px] resize-none`}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Anything else we should know?"
                />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-sheen px-7 py-4 text-sm font-medium text-ink shadow-gold transition-transform duration-300 hover:scale-[1.015] active:scale-[0.99] sm:w-auto"
            >
              Send Enquiry
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
