import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "kio2evyx",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})