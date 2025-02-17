import {prisma} from "@/prisma/prisma-client";
import Image from 'next/image';



export default async function Blog({ params: { locale, slug } }: any) {
  console.log(locale, slug);

  const post = await prisma.blogItem.findFirst({
    where: {
      slug: slug,
    },
    include: {
      translations: {
        where: {
          language: locale,
        },
        take: 1,
      },
    }
  });

  return (
    <>
      <section id="section-pricing" className="section bg-gray">
        <div className="container">
          <div className="w-full mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {post && post.translations?.[0]?.title}
            </h1>
            {/* <p className="text-gray-600 dark:text-gray-400 mb-2">
              By Dmitri • {new Date().getFullYear()}
            </p> */}
            <Image
              src={post && post.imageCover || '/blog/4.jpg'}
              alt={post && post.title || ''}
              width={400}
              height={400}
              className="w-full min-h-[400px] h-[400px] object-cover rounded-lg mb-6"
            />
            <p className="text-lg text-gray-700 dark:text-gray-300">
              { post && post.translations[0].content}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}