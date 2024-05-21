"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

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
    await prisma.posts.create({
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
    redirect('/')
  }
)

export const getPosts = async () => {
  const posts = await prisma.posts.findMany({
    include: {
      tags: {
        include: {
          tag: true
        }
      },
      author: true,
      likes: true,
      saved: true
    },

    orderBy: {
      createdAt: 'desc'
    }
  })

  return posts
}

export const likePost = authenticatedAction(
  z.object({
    postId: z.string()
  }),
  async({postId}, {userId}) => {
    const alreadyLiked = await prisma.like.findFirst({
      where: {
        postId,
        authorId: userId
      }
    })

    if(alreadyLiked) {
      await prisma.like.delete({
        where: {
          id: alreadyLiked.id
        }
      })
    } else {
      await prisma.like.create({
        data: {
          postId,
          authorId: userId
        }
      })
    }
  
    revalidatePath('/')
  }
)

export const savePost = authenticatedAction(
  z.object({
    postId: z.string()
  }),
  async({postId}, {userId}) => {
    const alreadySaved = await prisma.savedPosts.findFirst({
      where: {
        postId,
        userId
      }
    })

    if(alreadySaved) {
      await prisma.savedPosts.delete({
        where: {
          id: alreadySaved.id
        }
      })
    } else {
      await prisma.savedPosts.create({
        data: {
          postId,
          userId
        }
      })
    }

    revalidatePath('/')
  }
)

export const getSavedPosts = authenticatedAction(
  z.object({}),
  async({}, {userId}) => {
    const savedPosts = await prisma.savedPosts.findMany({
      where: {
        userId,
      },
      select: {
        post: {
          include: {
            tags: {
              include: {
                tag: true
              }
            },
            likes: true,
            author: true,
            saved: true
          },
        },
        user: true
      }
    })

    return savedPosts
  })

export const getLikedPosts = authenticatedAction(
  z.object({}),
  async({}, {userId}) => {
    const likedPosts = await prisma.like.findMany({
      where: {
        authorId: userId
      },
      include: {
        post: {
          include: {
            tags: {
              include: {
                tag: true
              }
            },
            likes: true,
            author: true,
            saved: true,
          },
        },
        author: true
      },

      orderBy: {
        createdAt: 'desc'
      }
    })

    return likedPosts
  })