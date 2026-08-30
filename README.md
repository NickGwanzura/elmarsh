# Elmarsh Logistics Ltd

Production-ready Next.js website for Elmarsh Logistics Ltd.

## Local development

```bash
npm install
npm run dev
```

## Production

Set `NEXT_PUBLIC_SITE_URL` to the live HTTPS URL, then build with `npm run build` or deploy the included multi-stage Dockerfile in Dokploy. The standalone server listens on port `3000`.

The quote endpoint in `app/api/quote/route.ts` validates requests but intentionally does not yet send email. Configure an email or CRM provider there before accepting live enquiries.

## Docker deployment

Set the public URL, build the image, and start the production container:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example docker compose up -d --build
```

The app is exposed on port `3000` and includes a container health check. Put your reverse proxy or platform ingress in front of that port for HTTPS.
