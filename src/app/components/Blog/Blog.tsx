"use client";
import BlogItem from "@/app/components/Blog/BlogItem";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


export default function Blog() {

    const t = useTranslations("blogSection");
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLHeadingElement>(null);

    const locale = useLocale();

    const allPosts = [
        { id: 1, title: "Post 1", content: "Content of Post 1" },
        { id: 2, title: "Post 2", content: "Content of Post 2" },
        { id: 3, title: "Post 3", content: "Content of Post 3" },
        { id: 4, title: "Post 4", content: "Content of Post 4" },
        { id: 5, title: "Post 5", content: "Content of Post 5" },
        { id: 6, title: "Post 6", content: "Content of Post 6" },
        { id: 7, title: "Post 7", content: "Content of Post 7" },
    ];

    const [visiblePosts, setVisiblePosts] = useState(3);

    const loadMore = () => {
        setVisiblePosts((prev) => Math.min(prev + 3, allPosts.length));
    };



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
                
                <div className="flex flex-wrap">
                    {allPosts.slice(0, visiblePosts).map((post) => (
                        <BlogItem key={post.id}
                            id={post.id}
                            title={post.title}
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