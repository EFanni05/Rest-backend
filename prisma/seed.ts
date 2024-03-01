import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
    const John = await prisma.client.create({
        data: {
            address : "3 Main str. Washington DC",
            name : "John Doe",
            monthlyLimit : 100,
            hasCable : false
        }
    })

    const Anna = await prisma.client.create({
        data: {
            address : "Budapest, Teréz krt. 43, 1067",
            name : "Anna Nagy",
            monthlyLimit : 70
        }
    })
}