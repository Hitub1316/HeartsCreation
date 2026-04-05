export const runtime = "edge";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  return NextResponse.json(
    { message: "Checkout is temporarily disabled." },
    { status: 503 }
  );
}
