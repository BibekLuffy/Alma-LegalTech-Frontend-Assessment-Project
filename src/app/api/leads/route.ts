import { v4 as uuidv4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();

  const lead = {
    id: uuidv4(),
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    linkedIn: data.get("linkedIn"),
    country: data.get("country"),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visas: data.getAll("visas") ? JSON.parse(data.getAll("visas") as any) : [],
    additionalInfo: data.get("additionalInfo"),
    resumeUrl: data.get("resumeUrl"),
    status: "PENDING",
  };

  return NextResponse.json(lead, { status: 201 });
}
