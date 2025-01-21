
import {ChangeEvent, useTransition} from "react";
import {useRouter} from "next/navigation";
import {useLocale} from "use-intl";

export default function LocaleSwitcher(){
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = event.target.value;
        startTransition(()=>{
            router.replace(`/${nextLocale}`);
        });
    }

    return (<select name="" id="" defaultValue={localActive} disabled={isPending} className="px-2" onChange={onSelectChange}>
        <option value="ro">RO</option>
        <option value="en">EN</option>
        <option value="ru">RU</option>
    </select>);
}