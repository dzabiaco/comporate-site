import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("footerSection");
    return (
        <footer id="footer" className="footer py-9">
            <div className="container">
                <div className="row gap-y">

                    <div className="col-xl-6 order-md-last">
                        <h6 className="mb-4"><strong>{t('rightHeader')}</strong></h6>
                        <p>{t('rightText')}</p>
                        <a className="btn btn-primary mr-2" href="#">{t('startTrialButton')}</a>
                        <a className="btn btn-secondary" href="#contact">{t('contactButton')}</a>
                    </div>

                    <div className="col-xl-6 order-md-first">
                        <h6 className="mb-4"><strong>{t('leftHeader')}</strong></h6>
                        <p>{t('leftText')}</p>
                        <small className="opacity-70">© {new Date().getFullYear()} Comporate. {t('allRightReserved')}.</small>
                    </div>

                </div>
            </div>
        </footer>
    );
}