import PartnersBenifits from "../Components/Partners/PartersBenifits";
import PartnersAbout from "../Components/Partners/PartnersAbout";
import PartnersHero from "../Components/Partners/PartnersHero";
import PartnersWhy from "../Components/Partners/PartnersWhy";

export default function Partners(){
    return(
        <div>
            <PartnersHero/>
            <PartnersAbout/>
            <PartnersBenifits/>
            <PartnersWhy/>
        </div>
    )
}