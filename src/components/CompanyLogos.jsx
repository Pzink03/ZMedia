import { companyLogos } from "../constants";

export function CompanyLogos( { className }){
    return (
        <div className={className}>
            <h5 className="tagline mb-6 text-center text-n-1/50">
                Helping people create beautiful content
            </h5>
            <ul className="flex">
                {companyLogos.map((logo, index) => (
                    <li key={index} className="flex items-center justify-center flex-1 h-[8.5rem]">
                        <img
                        src={logo}
                        height={28}
                        width={134}
                        alt={logo}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
