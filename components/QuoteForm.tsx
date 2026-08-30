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
  const field = (name: string, label: string, type="text", req=false) => <label>{label}{req && <b aria-hidden="true"> *</b>}<input name={name} type={type} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined}/>{errors[name] && <span id={`${name}-error`} className="error">{errors[name]}</span>}</label>;
  return <form className="quote-form" onSubmit={submit} noValidate>
    <div className="form-grid">{field("fullName","Full name","text",true)}{field("company","Company name")}{field("email","Email address","email",true)}{field("phone","Phone number","tel",true)}{field("collection","Collection location","text",true)}{field("destination","Destination","text",true)}
      <label>Cargo type <b>*</b><select name="cargoType" aria-invalid={!!errors.cargoType}><option value="">Select cargo type</option><option value="bags">Bag(s)</option><option>Vehicle</option><option>Vehicle spares</option><option>Household goods</option><option>Machinery or equipment</option><option>Packaged cargo</option><option>Other</option></select>{errors.cargoType && <span className="error">{errors.cargoType}</span>}</label>
      {field("vehicle","Vehicle make and model")}
      <label>Number of vehicles/items <b>*</b><input name="quantity" type="number" min="1" value={quantity} onChange={e => setQuantity(Math.max(1, Number(e.target.value)))} />{errors.quantity && <span className="error">{errors.quantity}</span>}</label>
      {field("dimensions","Dimensions")}{field("weight","Approximate weight")}{field("date","Preferred collection date","date")}
    </div>
    <label>Message<textarea name="message" rows={5} placeholder="Tell us anything else that will help us prepare your quote."/></label>
    <label className="upload"><Upload/><span>Upload photographs or documents<small>PDF, JPG or PNG</small></span><input name="files" type="file" multiple accept=".pdf,.jpg,.jpeg,.png"/></label>
    <label className="checkbox"><input name="consent" type="checkbox"/><span>I agree that Elmarsh Logistics may use these details to respond to my enquiry. <b>*</b>{errors.consent && <span className="error">{errors.consent}</span>}</span></label>
    {errors.form && <p className="error" role="alert">{errors.form}</p>}
    <button className="button" disabled={status === "loading"}>{status === "loading" ? <><LoaderCircle className="spin"/> Sending…</> : "Submit quote request"}</button>
  </form>;
}
