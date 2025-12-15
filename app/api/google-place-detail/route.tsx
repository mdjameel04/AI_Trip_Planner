import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { placeName } = await request.json();

    const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

    const result = await axios.post(
      BASE_URL,
      {
        textQuery: placeName,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": process.env.GOOGLE_PLACE_API_KEY!,
          "X-Goog-FieldMask":
            "places.id,places.displayName,places.photos",
        },
      }
    );

    return NextResponse.json(result.data);
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to fetch place details" },
      { status: 500 }
    );
  }
}
