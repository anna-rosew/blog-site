import { ClassInfo } from "@/types/index";
import MorningIcon from "@/public/Assets/Icons/MorningIcon";
import EveningChillIcon from "@/public/Assets/Icons/EveningChillIcon";
import KundaliniIcon from "@/public/Assets/Icons/ChakraIcon";

export const classes: ClassInfo[] = [
  {
    icon: KundaliniIcon,
    classType: "Core Strength & Balance",
    description:
      "Improve your posture, while cultivating physical strength & mental steadiness. Targeted core work builds a strong foundation & enhances coordination. By engaging the Manipura chakra you support confidence, vitality, and inner strength.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Mon, Apr 13", "Mon, Apr 20", "Mon, Apr 27"],
    times: ["7:00 - 7:30 am", "7:00 - 7:30 am", "7:00 - 7:30 am"],
    dropInPrice: "£8",
    monthlyPrice: "3 Class Bundle: £18",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/kundalini-magic.webp",
    duration: "30 mins",
  },
  {
    icon: MorningIcon,
    classType: "Vital Breath",
    description:
      "Your breath is a powerful ally. Learn how to manage stress, ease anxiety, balance your emotions, and quiet your mind. Pranayama is the practice of the Heart Chakra — in profound ways these practices bring connection and the healing that comes from wholeness.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Wed, Apr 8", "Wed, Apr 15", "Wed, Apr 22"],
    times: ["7:00 - 7:30 am", "7:00 - 7:30 am", "7:00 - 7:30 am"],
    dropInPrice: "£8",
    monthlyPrice: "3 Class Bundle: £18",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/morning-breath.webp",
    duration: "30 mins",
  },
  {
    icon: EveningChillIcon,
    classType: "Evening Chill",
    description:
      "A peaceful class that invites you to slow down, soften, & reset your nervous system. Some weeks floor-based movement & breath, other weeks Rob guides you in supported Yin practices for Spring.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Thu, Apr 2", "Thu, Apr 9", "Thu, Apr 16"],
    times: ["8:00 - 9:00 pm", "8:00 - 9:00 pm", "8:00 - 9:00 pm"],
    dropInPrice: "£10",
    monthlyPrice: "3 Class Bundle: £24",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/evening-chill.webp",
    duration: "60 mins",
  },
];
