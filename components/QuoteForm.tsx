"use client";
import { CheckCircle2, ChevronLeft, ChevronRight, LoaderCircle, Upload } from "lucide-react";
import { FormEvent, useState } from "react";

const stepFields = [["cargoType", "quantity"], ["collection", "destination"], ["fullName", "email", "phone", "consent"]];

export function QuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [step, setStep] = useState(1);
  const [quantity, setQuantity] = useState(1);
  function validateStep(form: HTMLFormElement, target: number) {
    const data = new FormData(form); const next: Record<string, string> = {};
    stepFields[target - 1].forEach(name => { if (!data.get(name)) next[name] = "This field is required."; });
    if (target === 3) { const email = String(data.get("email") || ""); if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address."; }
    setErrors(next); return !Object.keys(next).length;
  }
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; const data = new FormData(form); const next: Record<string, string> = {};
    stepFields.flat().forEach(name => { if (!data.get(name)) next[name] = "This field is required."; });
    const email = String(data.get("email") || ""); if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (Object.keys(next).length) { setErrors(next); const first = stepFields.findIndex(fields => fields.some(name => next[name])); if (first >= 0) setStep(first + 1); return; }
    setErrors({}); setStatus("loading");
    try { const res = await fetch("/api/quote", { method: "POST", body: data }); if (!res.ok) throw new Error(); setStatus("success"); }
    catch { setErrors({ form: "We could not send your request. Please call us instead." }); setStatus("idle"); }
  }
  if (status === "success") return <div className="success-panel" role="status"><CheckCircle2/><h2>Thank you — your request is in.</h2><p>Our team will review the details and get back to you shortly.</p></div>;
  const autoMap: Record<string, { auto?: string; mode?: string }> = {
    fullName: { auto: "name" },
    company: { auto: "organization" },
    email: { auto: "email" },
    phone: { auto: "tel", mode: "tel" },
    quantity: { mode: "numeric" },
  };
  const field = (name: string, label: string, type = "text", req = false) => {
    const a = autoMap[name];
    return <label htmlFor={name}>{label}{req && <b aria-hidden="true"> *</b>}<input id={name} name={name} type={type} required={req} autoComplete={a?.auto} inputMode={(a?.mode as React.HTMLAttributes<HTMLInputElement>["inputMode"]) ?? undefined} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined}/>{errors[name] && <span id={`${name}-error`} className="error">{errors[name]}</span>}</label>;
  };
  const section = (number: number, title: string, children: React.ReactNode) => <section className="quote-step" hidden={step !== number} aria-labelledby={`quote-step-${number}`}><div className="quote-step-heading"><span>Step {number}</span><h3 id={`quote-step-${number}`}>{title}</h3></div>{children}</section>;
  return <form className="quote-form" onSubmit={submit} noValidate>
    <div className="quote-progress" aria-label="Quote request progress">{["Cargo details", "Route", "Your contact"].map((label, index) => <button key={label} type="button" className={step === index + 1 ? "active" : step > index + 1 ? "complete" : ""} aria-current={step === index + 1 ? "step" : undefined} onClick={() => index + 1 < step && setStep(index + 1)}><span>{index + 1}</span>{label}</button>)}</div>
    {section(1, "What are you moving?", <><div className="form-grid"><label htmlFor="cargoType">Cargo type <b aria-hidden="true">*</b><select id="cargoType" name="cargoType" required aria-invalid={!!errors.cargoType}><option value="">Select cargo type</option><option value="bags">Bag(s)</option><option>Vehicle</option><option>Vehicle spares</option><option>Household goods</option><option>Machinery or equipment</option><option>Packaged cargo</option><option>Other</option></select>{errors.cargoType && <span className="error">{errors.cargoType}</span>}</label>{field("vehicle", "Vehicle make and model")}<label htmlFor="quantity">Number of vehicles/items <b aria-hidden="true">*</b><input id="quantity" name="quantity" type="number" min="1" inputMode="numeric" required value={quantity} onChange={e => setQuantity(Math.max(1, Number(e.target.value)))} />{errors.quantity && <span className="error">{errors.quantity}</span>}</label>{field("dimensions", "Dimensions")}{field("weight", "Approximate weight")}</div><label htmlFor="message">Message<textarea id="message" name="message" rows={5} placeholder="Tell us anything else that will help us prepare your quote." /></label><label className="upload"><Upload/><span>Upload photographs or documents<small>PDF, JPG or PNG</small></span><input name="files" type="file" multiple accept=".pdf,.jpg,.jpeg,.png" /></label></>)}
    {section(2, "Where should we collect and deliver?", <div className="form-grid">{field("collection", "Collection location", "text", true)}{field("destination", "Destination", "text", true)}{field("date", "Preferred collection date", "date")}</div>)}
    {section(3, "How can we reach you?", <><div className="form-grid">{field("fullName", "Full name", "text", true)}{field("company", "Company name")}{field("email", "Email address", "email", true)}{field("phone", "Phone number", "tel", true)}</div><label className="checkbox"><input name="consent" type="checkbox" /> <span>I agree that Elmarsh Logistics may use these details to respond to my enquiry. <b>*</b>{errors.consent && <span className="error">{errors.consent}</span>}</span></label></>)}
    {errors.form && <p className="error" role="alert">{errors.form}</p>}
    <div className="quote-actions">{step > 1 && <button type="button" className="button button-outline-dark" onClick={() => setStep(step - 1)}><ChevronLeft size={17}/> Back</button>}{step < 3 ? <button type="button" className="button" onClick={e => { const form = (e.currentTarget as HTMLButtonElement).form; if (form && validateStep(form, step)) setStep(step + 1); }}>Continue <ChevronRight size={17}/></button> : <button className="button" disabled={status === "loading"}>{status === "loading" ? <><LoaderCircle className="spin"/> Sending…</> : "Submit quote request"}</button>}</div>
  </form>;
}
