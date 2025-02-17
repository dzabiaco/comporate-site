import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";

interface Props {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    image: string;
}

export default function BlogItem(props: any) {
    const locale = useLocale();
    const blogPath = `/${locale}/blog/${props.slug}`;
    const pathname = usePathname();

    console.log('BLOG ITEM', pathname);

    const formatDate = (timestamp: string, locale: string = navigator.language) => {
        return new Intl.DateTimeFormat(locale).format(new Date(timestamp));
    };


    return (
        <div className="col-lg-4 m-15px-tb flex content-center">
            <div className="blog-grid">
                <div className="blog-grid-img">
                    <Link href={blogPath}>
                        <Image src={props.imageCover}
                            width="350" height="263" title="" alt="blog image" />
                    </Link>
                </div>
                <div className="blog-gird-info">
                    <div className="b-meta flex">
                        <span className="date mr-5">{formatDate(props.createdAt)}</span>
                        <span className="meta">Design</span>
                    </div>
                    <h5>
                        <Link href={blogPath}>{props.title}</Link>
                    </h5>
                    {/* <p>{props.content}</p> */}
                </div>
            </div>
        </div>
    );
}
