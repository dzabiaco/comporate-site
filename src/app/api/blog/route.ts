import {prisma} from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { title, slug, imageCover, content, published, translations } = body;

//     if (!title || !slug || !imageCover || !content || !translations || !Array.isArray(translations)) {
//       return NextResponse.json({ error: 'Missing required fields or invalid format' }, { status: 400 });
//     }

//     const newBlogItem = await prisma.blogItem.create({
//       data: {
//         title,
//         slug,
//         imageCover,
//         content,
//         published,
//         translations: {
//           create: translations.map((translation: { language: string; title: string; content: string }) => ({
//             language: translation.language,
//             title: translation.title,
//             content: translation.content,
//           })),
//         },
//       },
//       include: {
//         translations: true,
//       },
//     });

//     return NextResponse.json(newBlogItem, { status: 201 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }

export async function GET(req:NextRequest, res:NextResponse){
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get('lang');

  const posts = await prisma.blogItem.findMany({
    include: {
      translations: {
        where: {
          language: lang || undefined,
        },
        take: 1,
      },
    },
  });

  return NextResponse.json(posts, { status: 200 });
}