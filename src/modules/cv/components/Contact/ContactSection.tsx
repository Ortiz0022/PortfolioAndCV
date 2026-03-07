import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import SectionLayout from "../../../../shared/components/layout/SectionLayout";
import {
  Send,
  Mail,
  MessageSquare,
  User,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Github,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { profile } from "../../data/profile";

function StarDeco({
  size = 10,
  className = "",
  color,
}: {
  size?: number;
  className?: string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color ?? "currentColor"}
      className={className}
    >
      <path d="M8 0 L8.8 7.2 L16 8 L8.8 8.8 L8 16 L7.2 8.8 L0 8 L7.2 7.2 Z" />
    </svg>
  );
}

function Star6({
  size = 10,
  color,
  className,
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color ?? "currentColor"}
      className={className}
    >
      <path d="M12 2 L13.5 9 L20 7 L15 12 L20 17 L13.5 15 L12 22 L10.5 15 L4 17 L9 12 L4 7 L10.5 9 Z" />
    </svg>
  );
}

const nameSchema = z
  .string()
  .min(2, "Mínimo 2 caracteres.")
  .max(60, "Demasiado largo.");
const emailSchema = z
  .string()
  .min(1, "El correo es obligatorio.")
  .email("Correo inválido.");
const messageSchema = z
  .string()
  .min(10, "Mínimo 10 caracteres.")
  .max(1000, "Máximo 1000 caracteres.");

function validate<T>(schema: z.ZodType<T>, value: T): string | undefined {
  const r = schema.safeParse(value);
  if (!r.success) return r.error.issues[0].message;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <div className="flex items-center gap-1.5 text-xs text-rose-500 dark:text-rose-400">
      <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
      {message}
    </div>
  );
}

/**
 * Clases base de inputs adaptadas a modo claro/oscuro.
 */
function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200",
    "bg-background/70 text-foreground placeholder:text-muted-foreground",
    "backdrop-blur-sm",
    hasError
      ? "border-rose-400/60 focus:border-rose-400 focus:shadow-[0_0_0_3px_rgba(244,63,94,0.12)]"
      : "border-border focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(200,144,46,0.14)] dark:focus:shadow-[0_0_0_3px_rgba(232,195,104,0.14)]"
  );
}

const DECO_PLANETS = [
  {
    size: 18,
    grad: "radial-gradient(circle at 35% 35%, #fef3c7, #C8902E 55%, #92400e)",
    glow: "rgba(200,144,46,0.6)",
    top: "8%",
    left: "3%",
    delay: "0s",
  },
  {
    size: 11,
    grad: "radial-gradient(circle at 35% 35%, #e0f2fe, #0891b2 55%, #0c4a6e)",
    glow: "rgba(8,145,178,0.55)",
    top: "22%",
    right: "5%",
    delay: "0.6s",
  },
  {
    size: 14,
    grad: "radial-gradient(circle at 35% 35%, #ede9fe, #9333ea 55%, #3b0764)",
    glow: "rgba(147,51,234,0.5)",
    top: "68%",
    left: "6%",
    delay: "1.2s",
  },
  {
    size: 9,
    grad: "radial-gradient(circle at 35% 35%, #bbf7d0, #16a34a 55%, #14532d)",
    glow: "rgba(22,163,74,0.5)",
    top: "80%",
    right: "3%",
    delay: "0.3s",
  },
  {
    size: 7,
    grad: "radial-gradient(circle at 35% 35%, #fce7f3, #db2777 55%, #831843)",
    glow: "rgba(219,39,119,0.5)",
    top: "45%",
    left: "1%",
    delay: "0.9s",
  },
  {
    size: 12,
    grad: "radial-gradient(circle at 35% 35%, #fef9c3, #ca8a04 55%, #78350f)",
    glow: "rgba(202,138,4,0.55)",
    top: "55%",
    right: "2%",
    delay: "1.5s",
  },
];

const SOCIAL_META = [
  {
    platform: "github",
    icon: Github,
    label: "GitHub",
    iconClassName: "text-slate-500 dark:text-[#E8E4DD]",
  },
  {
    platform: "email",
    icon: Mail,
    label: "Email",
    iconClassName: "text-primary",
  },
  {
    platform: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    iconClassName: "text-blue-600 dark:text-blue-400",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    defaultValues: { name: "", email: "", message: "" },
    onSubmit: async ({ value }) => {
      await new Promise((r) => setTimeout(r, 900));
      console.log("Enviado:", value);
      setSubmitted(true);
    },
  });

  /**
   * Cruza la metadata visual con los links reales del perfil.
   */
  const socials = SOCIAL_META.flatMap((meta) => {
    const link = profile.socials?.find((s) => s.platform === meta.platform);
    if (!link) return [];
    const href = meta.platform === "email" ? `mailto:${link.href}` : link.href;
    return [{ ...meta, href, display: link.label ?? link.href }];
  });

  return (
    <SectionLayout id="contact">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-12 md:py-24 lg:px-16">
        {/* ── Estrellas de fondo ── */}
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: "var(--contact-star, rgba(122,107,90,0.22))",
                opacity: Math.random() * 0.5 + 0.1,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>

        {/* ── Planetas decorativos ── */}
        {DECO_PLANETS.map((p, i) => (
          <div
            key={i}
            className="pointer-events-none absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              ...("left" in p ? { left: p.left } : {}),
              ...("right" in p
                ? { right: (p as typeof p & { right: string }).right }
                : {}),
              background: p.grad,
              boxShadow: `0 0 ${p.size * 1.5}px ${p.size * 0.8}px ${p.glow}`,
              animation: "planet-breathe 4s ease-in-out infinite",
              animationDelay: p.delay,
            }}
          />
        ))}

        {/* ── Blobs decorativos ── */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-32 top-0 h-96 w-96 rounded-full opacity-10 blur-3xl"
            style={{
              background: "radial-gradient(circle, var(--primary), transparent)",
            }}
          />
          <div
            className="absolute -right-32 bottom-0 h-96 w-96 rounded-full opacity-10 blur-3xl"
            style={{
              background: "radial-gradient(circle, #9333ea, transparent)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-16 lg:px-24">
          {/* ── Encabezado ── */}
          <div className="mb-16 flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Star6
                size={7}
                color="var(--accent)"
                className="opacity-60 animate-pulse [animation-delay:0.2s]"
              />
              <StarDeco size={11} color="var(--accent)" className="animate-pulse" />
              <Star6
                size={5}
                color="var(--accent)"
                className="opacity-50 animate-pulse [animation-delay:0.6s]"
              />
              <StarDeco
                size={7}
                color="var(--primary)"
                className="animate-pulse [animation-delay:1s]"
              />
              <Star6
                size={6}
                color="var(--accent)"
                className="opacity-60 animate-pulse [animation-delay:0.4s]"
              />
            </div>

            <h2
              className="text-[clamp(2.4rem,5vw,3.8rem)] font-black leading-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contacto
            </h2>

            <div className="flex items-center gap-2">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              <span className="h-px w-16 bg-gradient-to-r from-primary/80 via-primary to-primary/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary/60" />
            </div>

            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">
              Hablemos
            </p>
          </div>

          {/* ── Layout principal ── */}
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
            {/* ── Columna izquierda ── */}
            <div className="flex flex-col justify-center gap-8">
              <div>
                <h3
                  className="mb-3 text-2xl font-black leading-snug text-foreground md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  ¿Tienes un proyecto en mente?
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Estoy abierta a oportunidades de trabajo, colaboraciones y
                  proyectos interesantes. ¡Escríbeme!
                </p>
              </div>

              {/* Links sociales */}
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target={s.platform !== "email" ? "_blank" : undefined}
                    rel="noreferrer"
                    className={cn(
                      "group flex items-center gap-4 rounded-2xl border px-5 py-4 transition-all duration-300 hover:-translate-y-0.5",
                      "border-border bg-card/70 backdrop-blur-sm"
                    )}
                    style={{
                      boxShadow: "0 8px 24px var(--glow)",
                    }}
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-background/70 transition-transform duration-300 group-hover:scale-110">
                      <s.icon className={cn("h-4 w-4", s.iconClassName)} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground">
                        {s.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-foreground">
                        {s.display}
                      </p>
                    </div>

                    <StarDeco
                      size={7}
                      color="var(--primary)"
                      className="flex-shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                    />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2 opacity-30">
                <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                <Star6 size={8} color="var(--accent)" className="animate-pulse" />
                <StarDeco
                  size={5}
                  color="var(--primary)"
                  className="animate-pulse [animation-delay:0.5s]"
                />
              </div>
            </div>

            {/* ── Formulario ── */}
            <div
              className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-6 backdrop-blur-xl md:p-8"
              style={{
                boxShadow:
                  "0 8px 48px var(--glow), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl"
                style={{
                  background: "radial-gradient(circle, var(--primary), transparent)",
                  opacity: 0.18,
                }}
              />
              <div
                className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full blur-3xl"
                style={{
                  background: "radial-gradient(circle, #9333ea, transparent)",
                  opacity: 0.14,
                }}
              />

              {submitted ? (
                <div className="flex flex-col items-center gap-6 py-10 text-center">
                  <div className="relative flex h-20 w-20 items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle at 35% 35%, #bbf7d0, #16a34a 55%, #14532d)",
                        boxShadow: "0 0 32px rgba(22,163,74,0.55)",
                        animation: "planet-breathe 3s ease-in-out infinite",
                      }}
                    />
                    <CheckCircle2 className="relative z-10 h-8 w-8 text-white drop-shadow" />
                  </div>

                  <div>
                    <h4
                      className="mb-2 text-2xl font-black text-foreground"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      ¡Mensaje enviado!
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Te responderé lo antes posible ✨
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Star6 size={10} color="var(--accent)" className="animate-pulse" />
                    <StarDeco
                      size={7}
                      color="var(--primary)"
                      className="animate-pulse [animation-delay:0.4s]"
                    />
                    <Star6
                      size={10}
                      color="var(--accent)"
                      className="animate-pulse [animation-delay:0.8s]"
                    />
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      form.reset();
                    }}
                    className="text-xs font-semibold text-primary/80 underline underline-offset-2 hover:text-primary"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit();
                  }}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  <form.Field
                    name="name"
                    validators={{ onBlur: ({ value }) => validate(nameSchema, value) }}
                  >
                    {(field) => (
                      <div className="flex flex-col gap-1.5">
                        <label className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          <User className="h-3.5 w-3.5 text-primary" />
                          Nombre
                        </label>

                        <input
                          name={field.name}
                          value={field.state.value}
                          placeholder="Tu nombre completo"
                          className={inputClass(
                            !!field.state.meta.errors.length &&
                              field.state.meta.isTouched
                          )}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                        />

                        <FieldError
                          message={
                            field.state.meta.isTouched
                              ? field.state.meta.errors[0]?.toString()
                              : undefined
                          }
                        />
                      </div>
                    )}
                  </form.Field>

                  <form.Field
                    name="email"
                    validators={{ onBlur: ({ value }) => validate(emailSchema, value) }}
                  >
                    {(field) => (
                      <div className="flex flex-col gap-1.5">
                        <label className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          <Mail className="h-3.5 w-3.5 text-primary" />
                          Correo electrónico
                        </label>

                        <input
                          name={field.name}
                          type="email"
                          value={field.state.value}
                          placeholder="tu@correo.com"
                          className={inputClass(
                            !!field.state.meta.errors.length &&
                              field.state.meta.isTouched
                          )}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                        />

                        <FieldError
                          message={
                            field.state.meta.isTouched
                              ? field.state.meta.errors[0]?.toString()
                              : undefined
                          }
                        />
                      </div>
                    )}
                  </form.Field>

                  <form.Field
                    name="message"
                    validators={{ onBlur: ({ value }) => validate(messageSchema, value) }}
                  >
                    {(field) => (
                      <div className="flex flex-col gap-1.5">
                        <label className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          <MessageSquare className="h-3.5 w-3.5 text-primary" />
                          Mensaje
                        </label>

                        <textarea
                          name={field.name}
                          rows={5}
                          value={field.state.value}
                          placeholder="Cuéntame sobre tu proyecto o consulta..."
                          className={cn(
                            inputClass(
                              !!field.state.meta.errors.length &&
                                field.state.meta.isTouched
                            ),
                            "resize-none"
                          )}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                        />

                        <div className="flex items-start justify-between">
                          <FieldError
                            message={
                              field.state.meta.isTouched
                                ? field.state.meta.errors[0]?.toString()
                                : undefined
                            }
                          />
                          <span className="ml-auto text-[10px] font-mono text-muted-foreground">
                            {field.state.value.length}/1000
                          </span>
                        </div>
                      </div>
                    )}
                  </form.Field>

                  <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
                    {([canSubmit, isSubmitting]) => (
                      <button
                        type="submit"
                        disabled={!canSubmit || !!isSubmitting}
                        className="group mt-1 flex w-full items-center justify-center gap-2.5 rounded-xl py-3.5 text-sm font-bold transition-all duration-300 disabled:opacity-40"
                        style={{
                          color: canSubmit
                            ? "var(--primary-foreground)"
                            : "var(--muted-foreground)",
                          background: canSubmit
                            ? "linear-gradient(135deg, var(--accent), var(--primary) 45%, #8b5e18)"
                            : "rgba(255,255,255,0.06)",
                          boxShadow: canSubmit
                            ? "0 0 24px var(--glow), 0 4px 16px var(--glow)"
                            : "none",
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black/70 dark:border-white/20 dark:border-t-white/80" />
                            Enviando…
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            Enviar mensaje
                            <Sparkles className="h-4 w-4 opacity-70" />
                          </>
                        )}
                      </button>
                    )}
                  </form.Subscribe>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}