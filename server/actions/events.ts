"use server"

import { eventFormSchema } from "@/app/schema/events"
import { db } from "@/drizzle/db"
import { EventTable } from "@/drizzle/schema"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
// THis basically thros error if this code is run anywhere but the server
import "use-server" 
import { z } from "zod"


export async function createEvent(unsafeData: z.infer<typeof eventFormSchema>): Promise<{error: boolean} | undefined> {
    const {success, data} =  eventFormSchema.safeParse(unsafeData) // Checks if data safe
    const {userId} = auth()

    if (!success || userId == null){
        return {error: true}
    }

    await db.insert(EventTable).values({...data, clerkUserId: userId})

    redirect("/events")

}

