import { NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";
export const runtime = "edge";

const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" as any })
  : null;

export async function POST(req: Request) {
  return NextResponse.json(
    { message: "Checkout is temporarily disabled." },
    { status: 503 }
  );
}
