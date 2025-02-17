"use client";
import BlogItem from "@/src/app/components/Blog/BlogItem";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface BlogItem {
    id: string;
    slug: string;
    imageCover: string;
    translations: any;
    createdAt: Date;
  }

export default function Blog() {

    const t = useTranslations("blogSection");
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLHeadingElement>(null);
    const [allPosts, setAllPosts] = useState<BlogItem[]>([]);

    const locale = useLocale();

    const [visiblePosts, setVisiblePosts] = useState(3);

    const loadMore = () => {
        setVisiblePosts((prev) => Math.min(prev + 3, allPosts.length));
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`/api/blog?lang=${locale}`, { cache: 'no-store' });
                if (!res.ok) notFound();
                const data = await res.json();
                setAllPosts(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);



    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const top = elementRef.current?.getBoundingClientRect()?.top;
                const isVisible = top < window.innerHeight;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="blog" className="section gray-bg">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className={`${isVisible ? 'animate__animated animate__zoomIn' : ''}`} ref={elementRef}>{t('header')}</h2>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-wrap items-center content-center">
                    {allPosts.slice(0, visiblePosts).map((post) => (
                        <BlogItem key={post.id}
                            id={post.id}
                            title={post.translations[0].title}
                            content={post.translations[0].content}
                            slug={post.slug}
                            imageCover={post.imageCover}
                            createdAt={post.createdAt}
                        />
                    ))}
                </div>
                {visiblePosts < allPosts.length && (
                    <div className="mt-7 w-full flex justify-center items-center">

                    <button onClick={loadMore} className="btn btn-lg btn-round btn-primary mw-200">
                        {t('morePosts')}
                    </button>
                    </div>
                )}
            </div>

        </section>
    );
}