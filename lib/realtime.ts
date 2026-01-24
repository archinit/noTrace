import z from "zod";
import { Realtime, InferRealtimeEvents } from "@upstash/realtime"
import { redis } from "@/lib/redis"; 

// events to happen in app in realtime: messages, destroyroom

const message = z.object({
    id: z.string(),
    sender: z.string(),
    text: z.string(),
    timeStamp: z.number(),
    roomId: z.string(),
    token: z.string().optional(),
});


const schema = {
    chat: {
        message,
        destroy: z.object({
            isDestroyed: z.literal(true)
        }),
    }
}

export const realtime = new Realtime({ schema, redis });
export type RealtimeEvents = InferRealtimeEvents<typeof realtime>;
export type Message = z.infer<typeof message>;