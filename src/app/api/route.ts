import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "Hello from server" });
};

export const POST = async () => {
  return NextResponse.json({ message: "Hello from server" });
};

export const DELETE = async () => {
  return NextResponse.json({ message: "Hello from server" });
};

export const PUT = async () => {
  return NextResponse.json({ message: "Hello from server" });
};
