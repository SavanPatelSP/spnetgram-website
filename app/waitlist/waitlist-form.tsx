"use client";

import * as React from "react";
import { CheckCircle, Loader2, ArrowRight, Home, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { WaitlistFormData } from "@/types";

type FormErrors = Partial<Record<keyof WaitlistFormData, string>>;
type SubmitState = "idle" | "loading" | "success" | "error";

function validateForm(data: WaitlistFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.firstName.trim()) {
    errors.firstName = "First name is required";
  } else if (data.firstName.trim().length < 2) {
    errors.firstName = "First name must be at least 2 characters";
  }

  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
  } else if (data.lastName.trim().length < 2) {
    errors.lastName = "Last name must be at least 2 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (data.telegramUsername && !/^@?[\w]{3,}$/.test(data.telegramUsername)) {
    errors.telegramUsername =
      "Please enter a valid Telegram username (minimum 3 characters)";
  }

  if (!data.agreedToUpdates) {
    errors.agreedToUpdates = "You must agree to receive updates";
  }

  return errors;
}

export function WaitlistForm() {
  const [formData, setFormData] = React.useState<WaitlistFormData>({
    firstName: "",
    lastName: "",
    email: "",
    telegramUsername: "",
    agreedToUpdates: false,
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [touched, setTouched] = React.useState<
    Partial<Record<keyof WaitlistFormData, boolean>>
  >({});
  const [submitState, setSubmitState] = React.useState<SubmitState>("idle");

  const updateField = (
    field: keyof WaitlistFormData,
    value: string | boolean,
  ) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    if (touched[field]) {
      const newErrors = validateForm(newData);
      setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
    }
  };

  const handleBlur = (field: keyof WaitlistFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validateForm(formData);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      telegramUsername: true,
      agreedToUpdates: true,
    });

    if (Object.keys(newErrors).length > 0) return;

    setSubmitState("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="text-center animate-fade-in">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/20">
          <CheckCircle className="h-10 w-10 text-emerald-400" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight">
          Welcome to SP NET GRAM Early Access
        </h2>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
          Thank you for joining the waitlist. We will notify you when access
          becomes available.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/">
            <Button variant="primary" size="lg">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>
          <Link href="/company">
            <Button variant="outline" size="lg">
              <Users className="mr-2 h-4 w-4" />
              Join Community
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-medium"
          >
            First Name <span className="text-red-400">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            onBlur={() => handleBlur("firstName")}
            className={cn(
              "block w-full rounded-lg border bg-background px-4 py-2.5 text-sm transition-all duration-200 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring",
              errors.firstName && touched.firstName
                ? "border-red-500/50"
                : "border-border/50",
            )}
            placeholder="John"
            aria-invalid={!!(errors.firstName && touched.firstName)}
            aria-describedby={
              errors.firstName && touched.firstName
                ? "firstName-error"
                : undefined
            }
          />
          {errors.firstName && touched.firstName && (
            <p id="firstName-error" className="mt-1.5 text-xs text-red-400">
              {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm font-medium"
          >
            Last Name <span className="text-red-400">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            onBlur={() => handleBlur("lastName")}
            className={cn(
              "block w-full rounded-lg border bg-background px-4 py-2.5 text-sm transition-all duration-200 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring",
              errors.lastName && touched.lastName
                ? "border-red-500/50"
                : "border-border/50",
            )}
            placeholder="Doe"
            aria-invalid={!!(errors.lastName && touched.lastName)}
            aria-describedby={
              errors.lastName && touched.lastName
                ? "lastName-error"
                : undefined
            }
          />
          {errors.lastName && touched.lastName && (
            <p id="lastName-error" className="mt-1.5 text-xs text-red-400">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          className={cn(
            "block w-full rounded-lg border bg-background px-4 py-2.5 text-sm transition-all duration-200 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring",
            errors.email && touched.email
              ? "border-red-500/50"
              : "border-border/50",
          )}
          placeholder="john@example.com"
          aria-invalid={!!(errors.email && touched.email)}
          aria-describedby={errors.email && touched.email ? "email-error" : undefined}
        />
        {errors.email && touched.email && (
          <p id="email-error" className="mt-1.5 text-xs text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="telegramUsername"
          className="mb-2 block text-sm font-medium"
        >
          Telegram Username{" "}
          <span className="text-muted-foreground/70">(Optional)</span>
        </label>
        <input
          id="telegramUsername"
          type="text"
          value={formData.telegramUsername}
          onChange={(e) => updateField("telegramUsername", e.target.value)}
          onBlur={() => handleBlur("telegramUsername")}
          className={cn(
            "block w-full rounded-lg border bg-background px-4 py-2.5 text-sm transition-all duration-200 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring",
            errors.telegramUsername && touched.telegramUsername
              ? "border-red-500/50"
              : "border-border/50",
          )}
          placeholder="@username"
          aria-invalid={
            !!(
              errors.telegramUsername && touched.telegramUsername
            )
          }
          aria-describedby={
            errors.telegramUsername && touched.telegramUsername
              ? "telegram-error"
              : undefined
          }
        />
        {errors.telegramUsername && touched.telegramUsername && (
          <p id="telegram-error" className="mt-1.5 text-xs text-red-400">
            {errors.telegramUsername}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="agreedToUpdates"
          type="checkbox"
          checked={formData.agreedToUpdates}
          onChange={(e) => updateField("agreedToUpdates", e.target.checked)}
          onBlur={() => handleBlur("agreedToUpdates")}
          className="mt-1 h-4 w-4 rounded border-border/50 bg-background text-primary focus:ring-2 focus:ring-ring"
          aria-invalid={
            !!(errors.agreedToUpdates && touched.agreedToUpdates)
          }
          aria-describedby={
            errors.agreedToUpdates && touched.agreedToUpdates
              ? "agree-error"
              : undefined
          }
        />
        <label htmlFor="agreedToUpdates" className="text-sm text-muted-foreground/80 leading-relaxed">
          I agree to receive updates regarding SP NET GRAM Early Access.
        </label>
      </div>
      {errors.agreedToUpdates && touched.agreedToUpdates && (
        <p id="agree-error" className="text-xs text-red-400 -mt-4">
          {errors.agreedToUpdates}
        </p>
      )}

      {submitState === "error" && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
          Something went wrong. Please try again later.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={submitState === "loading"}
      >
        {submitState === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Join Early Access
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
