import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  if (data) {
    const { username = "", password = "" } = data;

    if (
      !username ||
      (username && username != "admin") ||
      !password ||
      (password && password != "admin123$")
    ) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }

    return NextResponse.json("ok", { status: 201 });
  }
  return NextResponse.json({ message: "Invalid body" }, { status: 401 });
}
