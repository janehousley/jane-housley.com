import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const VALID_TOKEN = "demo-valid-token"; // Replace with real token logic later!

export async function GET(req: NextRequest) {
  const pdfParam = req.nextUrl.searchParams.get("pdf");
  const token = req.nextUrl.searchParams.get("token");

  if (!pdfParam || !token || token !== VALID_TOKEN) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const filePath = path.join(process.cwd(), "private-pdfs", pdfParam);

    console.log("File path:", filePath);
    
    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${pdfParam}"`,
      },
    });
  } catch {
    return new NextResponse("File not found", { status: 404 });
  }
}
