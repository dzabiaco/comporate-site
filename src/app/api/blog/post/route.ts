import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get('lang');
    const slug = searchParams.get('slug');

    const posts = await prisma.blogItem.findMany({
        where: {
            slug: slug || undefined
        },
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