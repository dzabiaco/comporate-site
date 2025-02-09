
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomeSection() {
  const t = useTranslations("Home");
  return (
    <header id="home" className="header bg-gradient-radial from-blue-600 to-indigo-500 w-full">
      <div className="container">
        <div className="row align-items-center h-100">

          <div className="col-lg-5">
            <h1 className="display-4 text-white"><strong>Comporate</strong><br />{t('header')}</h1>
            <p className="lead mt-5 text-white text-lg">{t('subHeader')}</p>

            <hr className="w-10 ml-0 my-7" />

            <p className="gap-xy">
              <Link
                className="btn btn-lg btn-round border border-white text-blue-600 bg-white mw-200 transition duration-300"
                id="get_started"
                href="#section-pricing"
              >
                {t('getStartedBtn')}
              </Link>

              {/* <Link href="#"
                className="inline-block font-semibold text-blue-600 text-center align-middle select-none bg-white border border-transparent pt-[7px] px-[32px] pb-[6px] text-[12px] text-[12px] leading-[2.2] rounded-[10rem] transition-colors duration-150 ease-in-out hover:bg-blue-100 tracking-[1.7px] uppercase"
              >
                {t('getStartedBtn')}
              </Link> */}

              <Link
                className="btn btn-lg btn-round border border-white text-white mw-200 transition duration-300 hover:bg-white hover:text-blue-600"
                href="#section-features"
              >
                {t('featuresBtn')}
              </Link>
            </p>
          </div>

          <div className="col-lg-6 ml-auto">
            <div className="video-wrapper ratio-16x9 rounded shadow-6 mt-8 mt-lg-0">
              <div className="poster" style={{ backgroundImage: 'url(../../static/assets/img/preview/shot-1.png)' }}></div>
              {/* <button className="btn btn-circle btn-lg btn-info"><i className="fa fa-play"></i></button> */}
              {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/M5S_JBRjd1s?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe> */}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}