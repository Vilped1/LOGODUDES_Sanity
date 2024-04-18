import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "kio2evyx",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})

// skcC5KrKQuzs5Y0KCFuAItGE3wxLJz8pYC6d2YuxQaPHiWfQPUFrnod41TrBz9Q8pgIhGWdr5bJiPH8VtlyQzwzARgQButMHrot2vmzggYEx0ketuZD1FNuc39kjQBuoaHOoNYBAHbGzRKp9q0L3iudTZ9efUpAAhmPUZoRLwVI4p6pipuz1

export const writeClient = createClient({
    projectId: "kio2evyx",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
    token: "skcC5KrKQuzs5Y0KCFuAItGE3wxLJz8pYC6d2YuxQaPHiWfQPUFrnod41TrBz9Q8pgIhGWdr5bJiPH8VtlyQzwzARgQButMHrot2vmzggYEx0ketuZD1FNuc39kjQBuoaHOoNYBAHbGzRKp9q0L3iudTZ9efUpAAhmPUZoRLwVI4p6pipuz1"
})