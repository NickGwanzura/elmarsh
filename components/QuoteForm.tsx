"use client";
import { CheckCircle2, LoaderCircle, Upload } from "lucide-react";
import { FormEvent, useState } from "react";

const required = ["fullName", "email", "phone", "collection", "destination", "cargoType", "quantity", "consent"];
export function QuoteForm() {
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [status, setStatus] = useState<"idle"|"loading"|"success">("idle");
  const [quantity, setQuantity] = useState(1);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = new FormData(e.currentTarget); const next: Record<string,string> = {};
    required.forEach(k => { if (!form.get(k)) next[k] = "This field is required."; });
    const email = String(form.get("email") || ""); if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (Object.keys(next).length) { setErrors(next); return; }
    setErrors({}); setStatus("loading");
    try { const res = await fetch("/api/quote", { method: "POST", body: form }); if (!res.ok) throw new Error(); setStatus("success"); }
    catch { setErrors({ form: "We could not send your request. Please call us instead." }); setStatus("idle"); }
  }
  if (status === "success") return <div className="success-panel" role="status"><CheckCircle2/><h2>Thank you — your request is in.</h2><p>Our team will review the details and get back to you shortly.</p></div>;
  const field = (name: string, label: string, type="text", req=false) => <label htmlFor={name}>{label}{req && <b aria-hidden="true"> *</b>}<input id={name} name={name} type={type} required={req} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined}/>{errors[name] && <span id={`${name}-error`} className="error">{errors[name]}</span>}</label>;
  return <form className="quote-form" onSubmit={submit} noValidate>
    <div className="form-grid">{field("fullName","Full name","text",true)}{field("company","Company name")}{field("email","Email address","email",true)}{field("phone","Phone number","tel",true)}{field("collection","Collection location","text",true)}{field("destination","Destination","text",true)}
      <label htmlFor="cargoType">Cargo type <b aria-hidden="true">*</b><select id="cargoType" name="cargoType" required aria-invalid={!!errors.cargoType} aria-describedby={errors.cargoType ? "cargoType-error" : undefined}><option value="">Select cargo type</option><option value="bags">Bag(s)</option><option>Vehicle</option><option>Vehicle spares</option><option>Household goods</option><option>Machinery or equipment</option><option>Packaged cargo</option><option>Other</option></select>{errors.cargoType && <span id="cargoType-error" className="error">{errors.cargoType}</span>}</label>
      {field("vehicle","Vehicle make and model")}
      <label htmlFor="quantity">Number of vehicles/items <b aria-hidden="true">*</b><input id="quantity" name="quantity" type="number" min="1" required aria-invalid={!!errors.quantity} aria-describedby={errors.quantity ? "quantity-error" : undefined} value={quantity} onChange={e => setQuantity(Math.max(1, Number(e.target.value)))} />{errors.quantity && <span id="quantity-error" className="error">{errors.quantity}</span>}</label>
      {field("dimensions","Dimensions")}{field("weight","Approximate weight")}{field("date","Preferred collection date","date")}
    </div>
    <label htmlFor="message">Message<textarea id="message" name="message" rows={5} placeholder="Tell us anything else that will help us prepare your quote."/></label>
    <label className="upload"><Upload/><span>Upload photographs or documents<small>PDF, JPG or PNG</small></span><input name="files" type="file" multiple accept=".pdf,.jpg,.jpeg,.png"/></label>
    <label className="checkbox"><input name="consent" type="checkbox"/><span>I agree that Elmarsh Logistics may use these details to respond to my enquiry. <b>*</b>{errors.consent && <span className="error">{errors.consent}</span>}</span></label>
    {errors.form && <p className="error" role="alert">{errors.form}</p>}
    <button className="button" disabled={status === "loading"}>{status === "loading" ? <><LoaderCircle className="spin"/> Sending…</> : "Submit quote request"}</button>
  </form>;
}
