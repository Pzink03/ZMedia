import { notificationImages } from "../constants";

export function Notification({ className, title}){
    return (
        <div className={`${className || ""} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border-n-1/10 rounded-2xl gap-5`}>
            <div className="flex-1">
                <h6 className="mb-1 font-semibold text-base">{title}</h6>
                <div className="flex items-center justify-between">
                    <ul className="flex -m-0.5">
                        {notificationImages.map((item, index) => (
                        <li className="flex w-6 h-6 border-2 border-n-2 border-full" key={index}>
                            <img
                            src={item}
                            alt={item}
                            className="w-full"
                            width={20}
                            height={20}
                            />
                        </li>

                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
