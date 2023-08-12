import { checkApiLimit, increaseAPILimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from 'replicate'

const replicate = new Replicate({
    auth:process.env.REPLICATEAI_API_TOKEN!
})


export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!replicate.auth) {
      return new NextResponse("API key is Missing", { status: 500 });
    }
    if (!prompt) {
      return new NextResponse("Messages are required", { status: 400 });
    }
    const freeTrail = await checkApiLimit();
    const isPro = await checkSubscription()
    if (!freeTrail && !isPro) {
      return new NextResponse("Free trail has expired", { status: 403 });
    }


    const response = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: prompt
        }
      }
    );
    if(!isPro){
      await increaseAPILimit();
    }
    return NextResponse.json(response);
  } catch (error) {
    console.log("Video Error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
