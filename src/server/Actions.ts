"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"

/*
model Posts {
  id        String   @id @default(cuid())
  title     String
  content   String
  image     String?

  comments  Comment[]
  likes     Like[]
  saved     SavedPosts[]
  tags      PostTag[]
  
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Comment {
  id        String   @id @default(cuid())
  content   String
  postId    String
  authorId  String

  post      Posts    @relation(fields: [postId], references: [id])
  author    User     @relation(fields: [authorId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Like {
  id        String   @id @default(cuid())
  postId    String
  authorId  String

  post      Posts    @relation(fields: [postId], references: [id])
  author    User     @relation(fields: [authorId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([postId, authorId])
}

model Followers {
  id        String   @id @default(cuid())
  followerId String
  followingId String

  follower  User     @relation(name: "Follower", fields: [followerId], references: [id])
  following User     @relation(name: "Following", fields: [followingId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([followerId, followingId])
}

model SavedPosts {
  id        String   @id @default(cuid())
  postId    String
  userId    String

  post      Posts    @relation(fields: [postId], references: [id])
  user      User     @relation(fields: [userId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([postId, userId])
}

model Tag {
  id    String   @id @default(cuid())
  name  String   @unique
  posts PostTag[]
}

model PostTag {
  postId String
  tagId  String

  post Posts @relation(fields: [postId], references: [id])
  tag  Tag   @relation(fields: [tagId], references: [id])

  @@id([postId, tagId])
}
*/

export const createPost = authenticatedAction(
  z.object({
    title: z.string(),
    content: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string())
  }),
  async({title, content, image, tags}, {userId}) => {
    const post = await prisma.posts.create({
      data: {
        title,
        content,
        image,
        authorId: userId,
        tags: {
          create: tags.map(tag => ({
            tag: {
              connectOrCreate: {
                where: {name: tag},
                create: {name: tag}
              }
            }
          }))
        }
      }
    })
    return post
  }
)
