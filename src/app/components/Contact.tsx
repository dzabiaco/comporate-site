"use client"

import Alert from "@/app/components/Alert";
import React, {useRef, useEffect, FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {

    // FORM STATE
    const t = useTranslations("contactSection");


    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLHeadingElement>(null);



    // ALERT STATE

    const [alertTitle, setAlertTitle] = useState<string>('');
    const [alertText, setAlertText] = useState<string>('');
    const [alertType, setAlertType] = useState<string>('');

    const [showAlert, setShowAlert] = useState<boolean>(false);

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


    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log("SEND");
        console.log({name, email, message});

        try {
            const res = await fetch(`/api/send-email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name, email, message})
            });

            console.log("RES", res);

            if(res.ok){
                setShowAlert(true);
                setAlertType("alert-success");
                setAlertTitle("Well done!");
                setAlertText("Your message has been successfully sent");

                setTimeout(async ()=> {
                    setShowAlert(false);
                    setAlertType("");
                    setAlertTitle("");
                    setAlertText("");
                },3000);
            }

            if(!res.ok){
                setShowAlert(true);
                setAlertType("alert-danger");
                setAlertTitle("Something went wrong!");

                setTimeout(async ()=> {
                    setShowAlert(false);
                    setAlertType("");
                    setAlertTitle("");
                    setAlertText("");
                },3000);
            }
        }
        catch (e){
            console.log(e);
            setShowAlert(true);
            setAlertType("alert-danger");
            setAlertTitle("Something went wrong!");

            setTimeout(async ()=> {
                setShowAlert(false);
                setAlertType("");
                setAlertTitle("");
                setAlertText("");
            },3000);
        }

    }


    return (
        <section className="section bg-gray" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mx-auto mt-8 custom-form">
                        <h2 className={`${isVisible ? 'animate__animated animate__zoomIn' : ''}`} ref={elementRef}>{t('header')}</h2>
                        {showAlert && <Alert title={alertTitle} text={alertText} type={alertType}/>}
                        <form name="contactForm" id="contactForm" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">{t('nameLabel')}</label>
                                <input type="text" onChange = {(event:React.ChangeEvent<HTMLInputElement>)=> setName(event.target.value)} className="form-control" id="name" required
                                 placeholder={t('namePlaceholder')} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">{t('emailLabel')}</label>
                                <input type="email" onChange = {(event:React.ChangeEvent<HTMLInputElement>)=> setEmail(event.target.value)} className="form-control" id="email" required
                                 placeholder={t('emailPlaceholder')} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">{t('messageLabel')}</label>
                                <textarea className="form-control" onChange = {(event:React.ChangeEvent<HTMLTextAreaElement>)=> setMessage(event.target.value)} id="message" rows={3} required
                                 placeholder={t('messagePlaceholder')}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">{t('submitButton')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}