import images from "./images.js";
import { Images_cannot_stop } from "./cannot_stop/dayByday";
import { activityPhotos } from "./indivisible/eventActivityImages";
interface events {
  id: number;
  programTitle: string;
  eventName: string;
  date: string;
  title: string;
  url: string;
  activityTitleOne: string;
  activityTitleTwo: string;
  activityContentOne: string;
  activityContentTwo: string;
  activityPhotos?: {
    photosFirst?: string;
    photosSecond?: string;
  };
  photo: string;
  poster: string;
  featuredImage: string[];
  memory?: {
    day1?: string;
    day2?: string;
    day3?: string;
  };
}

export const events = [
  {
    id: 1,
    title: "Whistle Blowers",
    programTitle: "Creative voices for Change Program",
    eventName: "Awareness Event",
    date: "17-20 March 2022",
    photo: images.img_whistle_blower_poster,
    url: "whistle-blowers",
    activityTitleOne: "Executive Summary",
    activityTitleTwo: "Objectives and Outputs",
    activityContentOne: `"Can't Stop, Won't Stop" project, a three-day event, successfully fostered community resilience and bonding through creative expressions, artistic endeavors, food, and films. This initiative addressed the challenges of displacement and identity crisis faced by communities affected by the coup since February 2021, offering a rejuvenating space that rekindled cultural connections and a sense of belonging. Furthermore, it supported local businesses, contributing to unity and laying the groundwork for sustainable societal growth, demonstrating the power of cultural and artistic engagement in healing and unifying communities during times of upheaval.`,
    activityContentTwo: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
    featuredImage: [
      images.img_cannot_stop01,
      images.img_cannot_stop02,
      images.img_cannot_stop03,
    ],
  },
  {
    id: 2,
    title: "On Our Own Time",
    programTitle: "Creative voices for Change Program",
    eventName: "Awareness Event",
    date: "4 August 2022",
    photo: images.img_on_our_own_time_poster,
    url: "on-our-own-time",
    summary: `"Can't Stop, Won't Stop" project, a three-day event, successfully fostered community resilience and bonding through creative expressions, artistic endeavors, food, and films. This initiative addressed the challenges of displacement and identity crisis faced by communities affected by the coup since February 2021, offering a rejuvenating space that rekindled cultural connections and a sense of belonging. Furthermore, it supported local businesses, contributing to unity and laying the groundwork for sustainable societal growth, demonstrating the power of cultural and artistic engagement in healing and unifying communities during times of upheaval.`,
    objectives: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
    featuredImage: [
      images.img_cannot_stop01,
      images.img_cannot_stop02,
      images.img_cannot_stop03,
    ],
  },
  {
    id: 3,
    title: "Can’t Stop, Won’t Stop 2023",
    programTitle: "Creative Resistance Program",
    eventName: "Solidarity Event",
    date: "22-24 February 2023",
    photo: images.img_cannot_stop_2023_poster,
    url: "can't-stop-2023",
    summary: `"Can't Stop, Won't Stop" project, a three-day event, successfully fostered community resilience and bonding through creative expressions, artistic endeavors, food, and films. This initiative addressed the challenges of displacement and identity crisis faced by communities affected by the coup since February 2021, offering a rejuvenating space that rekindled cultural connections and a sense of belonging. Furthermore, it supported local businesses, contributing to unity and laying the groundwork for sustainable societal growth, demonstrating the power of cultural and artistic engagement in healing and unifying communities during times of upheaval.`,
    objectives: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
    featuredImage: [
      images.img_cannot_stop01,
      images.img_cannot_stop02,
      images.img_cannot_stop03,
    ],
    memory: {
      day1: Images_cannot_stop.day1,
      day2: Images_cannot_stop.day2,
      day3: Images_cannot_stop.day3,
    },
  },
  {
    id: 4,
    title: "Indivisible",
    programTitle: "Creative Resistance Program",
    eventName: "Advocacy Event",
    date: "6-14 October 2023",
    photo: images.img_indivisible_poster,
    url: "indivisible",
    activityTitleOne: "ACTIVITY OVERVIEW",
    activityTitleTwo: "Mae Sot Exhibition",
    activityContentOne: `The photo exhibition  was conducted from 6th Oct to 14th Oct, and panel discussion on 11th Oct at Alliance Francaise, Chiang Mai.
    At the exhibition, a  total of 41 pictures  and a video through the lens of a dedicated photographer, Khin Sandar Nyunt were displayed, with curation by Som Supaparinya. The displayed pictures showcased the daily routines of medical students who ventured into Karenni State after Coup. They initiated mobile medical services in IDP camps in Karenni state, a region marked by intense conflict. Subsequently, a clinic was established providing essential daily healthcare services. 
    Over the course of the 10 days, approximately over 400 visitors to the exhibition engaged at Alliance Francaise Chiang Mai and online key posts had a reach of 16,740. A total of 54,893 Baht was raised through the sale of, postcards and donation. An additional 18000 baht  is expected to be raised in artwork orders in the coming days. 
    The exhibition opened with close door event on the evening of the Thursday 5th October and opening event on the 6th of October with speeches, film screening, music, food and drink. `,
    activityContentTwo: `The photo exhibition is now showing at Stardust Studio from 23th Nov to 3rd Dec.  
    One of the visitor at Chiang Mai exhibition is the owner of Stardust Studio and she is currently teaching photography workshop in migrant school in Mae Sot with co-owner of the Stardust Studio. They requested to host INDIVISIBLE exhibition as their frist exhitbion in their studio. 
    Htoo Alainmar Bo (photographer) & May Miya Moe (painter) who both are stuck in Mae Sot since early 2022. Both of them are under 25, queer aritsts who are struggling to create in such space as Mae Sot due to day to day survival need. Even thought they have never curate before we want to give oppotunatity and creat jobs for them. 
    On 23rd of November we had opening night for INDIVISIBLE Mae Sot edition and we had over 40 people attending. Journalist, Migrant school teacher, film maker, artists, students and  member of FGWM Federation of General Workers Myanmar  `,
    featuredImage: [
      images.img_cannot_stop01,
      images.img_cannot_stop02,
      images.img_cannot_stop03,
    ],
    activityPhotos: {
      photosFirst: activityPhotos.activity,
      photosSecond: activityPhotos.exhibition,
    },
  },
  {
    id: 5,
    title: "Can’t Stop, Won’t Stop 2024",
    programTitle: "Creative Resistance Program",
    eventName: "Solidarity Event",
    date: "22-24 February 2024",
    photo: images.img_cannot_stop_2024_poster,
    url: "can't-stop-2024",
    summary: `"Can't Stop, Won't Stop" project, a three-day event, successfully fostered community resilience and bonding through creative expressions, artistic endeavors, food, and films. This initiative addressed the challenges of displacement and identity crisis faced by communities affected by the coup since February 2021, offering a rejuvenating space that rekindled cultural connections and a sense of belonging. Furthermore, it supported local businesses, contributing to unity and laying the groundwork for sustainable societal growth, demonstrating the power of cultural and artistic engagement in healing and unifying communities during times of upheaval.`,
    objectives: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
    featuredImage: [
      images.img_cannot_stop01,
      images.img_cannot_stop02,
      images.img_cannot_stop03,
    ],
  },
  {
    id: 6,
    title: "Echos Of Resistances",
    programTitle: "Creative Resistance Program",
    eventName: "Advocacy Event",
    date: "12-14 April 2024",
    photo: images.img_echos_of_resistances_poster,
    url: "echos-of-resistances",
    summary: `"Can't Stop, Won't Stop" project, a three-day event, successfully fostered community resilience and bonding through creative expressions, artistic endeavors, food, and films. This initiative addressed the challenges of displacement and identity crisis faced by communities affected by the coup since February 2021, offering a rejuvenating space that rekindled cultural connections and a sense of belonging. Furthermore, it supported local businesses, contributing to unity and laying the groundwork for sustainable societal growth, demonstrating the power of cultural and artistic engagement in healing and unifying communities during times of upheaval.`,
    objectives: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
    featuredImage: [
      images.img_cannot_stop01,
      images.img_cannot_stop02,
      images.img_cannot_stop03,
    ],
  },
  {
    id: 7,
    title: "Fights For Our Rights",
    programTitle: "Creative Resistance Program",
    eventName: "Advocacy Event",
    date: "12-14 April 2024",
    photo: images.img_fights_for_our_rights_poster,
    url: "fights-for-our-rights",
    summary: `"Can't Stop, Won't Stop" project, a three-day event, successfully fostered community resilience and bonding through creative expressions, artistic endeavors, food, and films. This initiative addressed the challenges of displacement and identity crisis faced by communities affected by the coup since February 2021, offering a rejuvenating space that rekindled cultural connections and a sense of belonging. Furthermore, it supported local businesses, contributing to unity and laying the groundwork for sustainable societal growth, demonstrating the power of cultural and artistic engagement in healing and unifying communities during times of upheaval.`,
    objectives: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
    featuredImage: [
      images.img_cannot_stop01,
      images.img_cannot_stop02,
      images.img_cannot_stop03,
    ],
  },
  {
    id: 8,
    title: "For The Love of Coming Home",
    programTitle: "Creative Resistance Program",
    eventName: "Advocacy Event",
    date: "12-14 April 2024",
    photo: images.img_for_the_love_of_poster,
    url: "for-the-love-of-coming-home",
    summary: `"Can't Stop, Won't Stop" project, a three-day event, successfully fostered community resilience and bonding through creative expressions, artistic endeavors, food, and films. This initiative addressed the challenges of displacement and identity crisis faced by communities affected by the coup since February 2021, offering a rejuvenating space that rekindled cultural connections and a sense of belonging. Furthermore, it supported local businesses, contributing to unity and laying the groundwork for sustainable societal growth, demonstrating the power of cultural and artistic engagement in healing and unifying communities during times of upheaval.`,
    objectives: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
    featuredImage: [
      images.img_cannot_stop01,
      images.img_cannot_stop02,
      images.img_cannot_stop03,
    ],
  },
  {
    id: 9,
    title: "When We See The Planes",
    programTitle: "Creative voices for Change Program",
    eventName: "Awareness Event",
    date: "15-17 March 2024",
    photo: images.img_planes_poster,
    url: "when-we-see-the-planes",
    summary: `"Can't Stop, Won't Stop" project, a three-day event, successfully fostered community resilience and bonding through creative expressions, artistic endeavors, food, and films. This initiative addressed the challenges of displacement and identity crisis faced by communities affected by the coup since February 2021, offering a rejuvenating space that rekindled cultural connections and a sense of belonging. Furthermore, it supported local businesses, contributing to unity and laying the groundwork for sustainable societal growth, demonstrating the power of cultural and artistic engagement in healing and unifying communities during times of upheaval.`,
    objectives: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
    featuredImage: [
      images.img_cannot_stop01,
      images.img_cannot_stop02,
      images.img_cannot_stop03,
    ],
  },
  {
    id: 10,
    title: "Limbo Collective",
    programTitle: "Creative Resistance Program",
    eventName: "Advocacy Event",
    date: "11-29 September 2024",
    photo: images.img_limbo_poster,
    url: "limbo",
    summary: `"Can't Stop, Won't Stop" project, a three-day event, successfully fostered community resilience and bonding through creative expressions, artistic endeavors, food, and films. This initiative addressed the challenges of displacement and identity crisis faced by communities affected by the coup since February 2021, offering a rejuvenating space that rekindled cultural connections and a sense of belonging. Furthermore, it supported local businesses, contributing to unity and laying the groundwork for sustainable societal growth, demonstrating the power of cultural and artistic engagement in healing and unifying communities during times of upheaval.`,
    objectives: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
    featuredImage: [
      images.img_cannot_stop01,
      images.img_cannot_stop02,
      images.img_cannot_stop03,
    ],
  },
  {
    id: 11,
    title: "We Fight We Win",
    programTitle: "Creative voices for Change Program",
    eventName: "Awareness Event",
    date: "4 August 2022",
    photo: images.img_we_fight_we_win_poster,
    url: "we-fight-we-win",
    summary: `"Can't Stop, Won't Stop" project, a three-day event, successfully fostered community resilience and bonding through creative expressions, artistic endeavors, food, and films. This initiative addressed the challenges of displacement and identity crisis faced by communities affected by the coup since February 2021, offering a rejuvenating space that rekindled cultural connections and a sense of belonging. Furthermore, it supported local businesses, contributing to unity and laying the groundwork for sustainable societal growth, demonstrating the power of cultural and artistic engagement in healing and unifying communities during times of upheaval.`,
    objectives: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
    featuredImage: [
      images.img_cannot_stop01,
      images.img_cannot_stop02,
      images.img_cannot_stop03,
    ],
  },
];
